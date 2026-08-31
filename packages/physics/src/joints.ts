import { Vec2 } from '../../math/src/index.js';
import { RigidBody2D } from './rigidbody.js';

export interface Joint {
  bodyA: RigidBody2D;
  bodyB: RigidBody2D;
  solve(dt: number): void;
}

export class DistanceJoint2D implements Joint {
  public bodyA: RigidBody2D;
  public bodyB: RigidBody2D;
  public anchorA: Vec2;
  public anchorB: Vec2;
  public targetDistance: number;
  public stiffness: number = 1.0;
  public damping: number = 0.1;

  constructor(bodyA: RigidBody2D, bodyB: RigidBody2D, anchorA = new Vec2(), anchorB = new Vec2(), distance?: number) {
    this.bodyA = bodyA;
    this.bodyB = bodyB;
    this.anchorA = anchorA.clone();
    this.anchorB = anchorB.clone();

    const worldA = Vec2.add(bodyA.position, anchorA);
    const worldB = Vec2.add(bodyB.position, anchorB);
    this.targetDistance = distance ?? worldA.distance(worldB);
  }

  public solve(dt: number): void {
    const worldA = Vec2.add(this.bodyA.position, this.anchorA);
    const worldB = Vec2.add(this.bodyB.position, this.anchorB);

    const delta = Vec2.sub(worldB, worldA);
    const currentDist = delta.length();
    if (currentDist < 1e-6) return;

    const diff = currentDist - this.targetDistance;
    const normal = Vec2.scale(delta, 1.0 / currentDist);

    const relVel = Vec2.sub(this.bodyB.velocity, this.bodyA.velocity);
    const normalVel = relVel.dot(normal);

    const invMassSum = this.bodyA.invMass + this.bodyB.invMass;
    if (invMassSum === 0) return;

    const springForce = (diff * this.stiffness) / dt;
    const dampingForce = normalVel * this.damping;
    const impulseMag = -(springForce + dampingForce) / invMassSum;

    const impulse = Vec2.scale(normal, impulseMag * dt);
    this.bodyA.applyImpulse(Vec2.scale(impulse, -1));
    this.bodyB.applyImpulse(impulse);
  }
}

export class SpringJoint2D extends DistanceJoint2D {
  public restLength: number;

  constructor(bodyA: RigidBody2D, bodyB: RigidBody2D, restLength: number, stiffness = 50.0, damping = 2.0) {
    super(bodyA, bodyB, new Vec2(), new Vec2(), restLength);
    this.restLength = restLength;
    this.stiffness = stiffness;
    this.damping = damping;
  }
}
