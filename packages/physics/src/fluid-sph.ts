import { Vec2 } from '../../math/src/index.js';

export interface SPHParticle {
  position: Vec2;
  velocity: Vec2;
  force: Vec2;
  density: number;
  pressure: number;
}

export class SPHFluid2D {
  public particles: SPHParticle[] = [];
  public smoothingRadius: number = 20.0;
  public restDensity: number = 1000.0;
  public stiffness: number = 200.0;
  public viscosity: number = 0.1;
  public gravity: Vec2 = new Vec2(0, 980);

  constructor(particleCount = 100) {
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        position: new Vec2(200 + (i % 10) * 15, 100 + Math.floor(i / 10) * 15),
        velocity: new Vec2(),
        force: new Vec2(),
        density: 1000,
        pressure: 0
      });
    }
  }

  public step(dt: number): void {
    const h = this.smoothingRadius;
    const h2 = h * h;
    const poly6Const = 315 / (64 * Math.PI * Math.pow(h, 9));
    const spikyConst = -45 / (Math.PI * Math.pow(h, 6));

    // 1. Calculate Densities & Pressures
    for (let i = 0; i < this.particles.length; i++) {
      const pi = this.particles[i]!;
      let density = 0;

      for (let j = 0; j < this.particles.length; j++) {
        const pj = this.particles[j]!;
        const r2 = pi.position.distanceSq(pj.position);
        if (r2 < h2) {
          density += poly6Const * Math.pow(h2 - r2, 3);
        }
      }

      pi.density = Math.max(density, this.restDensity * 0.5);
      pi.pressure = this.stiffness * (pi.density - this.restDensity);
    }

    // 2. Calculate Pressure & Viscosity forces
    for (let i = 0; i < this.particles.length; i++) {
      const pi = this.particles[i]!;
      pi.force.set(this.gravity.x * pi.density, this.gravity.y * pi.density);

      for (let j = 0; j < this.particles.length; j++) {
        if (i === j) continue;
        const pj = this.particles[j]!;
        const r = pi.position.distance(pj.position);

        if (r > 0 && r < h) {
          const dir = Vec2.sub(pi.position, pj.position).normalize();
          // Pressure force
          const pForce = spikyConst * Math.pow(h - r, 2) * (pi.pressure + pj.pressure) / (2 * pj.density);
          pi.force.add(Vec2.scale(dir, pForce));

          // Viscosity force
          const vRel = Vec2.sub(pj.velocity, pi.velocity);
          const vForce = this.viscosity * (45 / (Math.PI * Math.pow(h, 6))) * (h - r) / pj.density;
          pi.force.add(Vec2.scale(vRel, vForce));
        }
      }
    }

    // 3. Integration & Boundary Collisions
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i]!;
      p.velocity.x += (p.force.x / p.density) * dt;
      p.velocity.y += (p.force.y / p.density) * dt;

      p.position.x += p.velocity.x * dt;
      p.position.y += p.velocity.y * dt;

      // Floor & Wall bounds
      if (p.position.y > 550) {
        p.position.y = 550;
        p.velocity.y *= -0.3;
      }
      if (p.position.x < 50) {
        p.position.x = 50;
        p.velocity.x *= -0.3;
      }
      if (p.position.x > 750) {
        p.position.x = 750;
        p.velocity.x *= -0.3;
      }
    }
  }
}
