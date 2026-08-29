import { Vec2 } from '../../math/src/index.js';

export interface BoidAgent {
  position: Vec2;
  velocity: Vec2;
  maxSpeed: number;
  maxForce: number;
}

export class SteeringBehaviors {
  public static seek(agent: BoidAgent, target: Vec2, out = new Vec2()): Vec2 {
    const desired = Vec2.sub(target, agent.position).normalize().scale(agent.maxSpeed);
    const steer = Vec2.sub(desired, agent.velocity);
    return steer.clampLength(0, agent.maxForce);
  }

  public static arrive(agent: BoidAgent, target: Vec2, slowingRadius = 100, out = new Vec2()): Vec2 {
    const toTarget = Vec2.sub(target, agent.position);
    const dist = toTarget.length();
    if (dist < 1e-4) return out.set(0, 0);

    let speed = agent.maxSpeed;
    if (dist < slowingRadius) {
      speed = agent.maxSpeed * (dist / slowingRadius);
    }

    const desired = toTarget.normalize().scale(speed);
    const steer = Vec2.sub(desired, agent.velocity);
    return steer.clampLength(0, agent.maxForce);
  }

  public static flock(agent: BoidAgent, neighbors: BoidAgent[], separationDist = 30, neighborDist = 80): Vec2 {
    const sep = new Vec2();
    const ali = new Vec2();
    const coh = new Vec2();

    let sepCount = 0;
    let neighborCount = 0;

    for (let i = 0; i < neighbors.length; i++) {
      const other = neighbors[i]!;
      if (other === agent) continue;

      const d = agent.position.distance(other.position);
      if (d > 0 && d < separationDist) {
        const diff = Vec2.sub(agent.position, other.position).normalize().scale(1.0 / d);
        sep.add(diff);
        sepCount++;
      }

      if (d > 0 && d < neighborDist) {
        ali.add(other.velocity);
        coh.add(other.position);
        neighborCount++;
      }
    }

    const totalSteer = new Vec2();

    if (sepCount > 0) {
      sep.scale(1.0 / sepCount).normalize().scale(agent.maxSpeed);
      totalSteer.add(Vec2.sub(sep, agent.velocity).clampLength(0, agent.maxForce).scale(1.5));
    }

    if (neighborCount > 0) {
      ali.scale(1.0 / neighborCount).normalize().scale(agent.maxSpeed);
      totalSteer.add(Vec2.sub(ali, agent.velocity).clampLength(0, agent.maxForce).scale(1.0));

      coh.scale(1.0 / neighborCount);
      totalSteer.add(this.seek(agent, coh).scale(1.0));
    }

    return totalSteer;
  }
}
