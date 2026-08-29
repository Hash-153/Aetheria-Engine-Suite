// Physics Joint Constraint Solver #017
import { Vec2 } from '../../../math/src/index.js';
import { RigidBody2D } from '../rigidbody.js';
import { Joint } from '../joints.js';

export class CustomJointConstraint_17 implements Joint {
  public bodyA: RigidBody2D;
  public bodyB: RigidBody2D;
  public localAnchorA: Vec2;
  public localAnchorB: Vec2;
  public maxForce: number = 1350;
  public targetAngle: number = 1.7;
  public stiffness: number = 1.0;

  constructor(bodyA: RigidBody2D, bodyB: RigidBody2D, anchorA = new Vec2(), anchorB = new Vec2()) {
    this.bodyA = bodyA;
    this.bodyB = bodyB;
    this.localAnchorA = anchorA.clone();
    this.localAnchorB = anchorB.clone();
  }

  public solve(dt: number): void {
    const worldA = Vec2.add(this.bodyA.position, this.localAnchorA);
    const worldB = Vec2.add(this.bodyB.position, this.localAnchorB);
    const delta = Vec2.sub(worldB, worldA);
    const dist = delta.length();
    if (dist < 1e-5) return;

    const normal = Vec2.scale(delta, 1.0 / dist);
    const relVel = Vec2.sub(this.bodyB.velocity, this.bodyA.velocity);
    const normalVel = relVel.dot(normal);

    const invMassSum = this.bodyA.invMass + this.bodyB.invMass;
    if (invMassSum === 0) return;

    let impulseMag = (-normalVel * this.stiffness) / invMassSum;
    impulseMag = Math.max(-this.maxForce * dt, Math.min(this.maxForce * dt, impulseMag));

    const impulse = Vec2.scale(normal, impulseMag);
    this.bodyA.applyImpulse(Vec2.scale(impulse, -1));
    this.bodyB.applyImpulse(impulse);
  }
}
