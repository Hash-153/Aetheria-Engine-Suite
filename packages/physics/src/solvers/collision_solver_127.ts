// Physics Collision Solver #127
import { Vec2, AABB2D } from '../../../math/src/index.js';
import { RigidBody2D } from '../rigidbody.js';

export class CollisionResolver_127 {
  public restitution: number = 0.2;
  public friction: number = 0.3;
  public massMultiplier: number = 7.35;

  public resolveContact(bodyA: RigidBody2D, bodyB: RigidBody2D, normal: Vec2, depth: number): void {
    const relVel = Vec2.sub(bodyB.velocity, bodyA.velocity);
    const velAlongNormal = relVel.dot(normal);

    if (velAlongNormal > 0) return;

    const e = Math.min(this.restitution, bodyA.restitution);
    const impulseMag = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass || 1.0);
    const impulse = Vec2.scale(normal, impulseMag);

    bodyA.applyImpulse(Vec2.scale(impulse, -1));
    bodyB.applyImpulse(impulse);
  }
}
