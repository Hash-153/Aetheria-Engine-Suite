import { Vec2 } from '../../math/src/index.js';
import { RigidBody2D, BodyType } from './rigidbody.js';

export interface ContactManifold {
  bodyA: RigidBody2D;
  bodyB: RigidBody2D;
  normal: Vec2; // From A to B
  depth: number;
  contacts: Vec2[];
}

export class SequentialImpulseSolver {
  public iterations: number = 8;
  public baumgarte: number = 0.2;
  public slop: number = 0.01;

  public solve(manifolds: ContactManifold[], dt: number): void {
    const invDt = dt > 0 ? 1.0 / dt : 0;

    for (let it = 0; it < this.iterations; it++) {
      for (let i = 0; i < manifolds.length; i++) {
        const m = manifolds[i]!;
        const a = m.bodyA;
        const b = m.bodyB;

        for (let c = 0; c < m.contacts.length; c++) {
          const contact = m.contacts[c]!;
          const ra = Vec2.sub(contact, a.position);
          const rb = Vec2.sub(contact, b.position);

          // Relative velocity at contact point
          const va = new Vec2(a.velocity.x - a.angularVelocity * ra.y, a.velocity.y + a.angularVelocity * ra.x);
          const vb = new Vec2(b.velocity.x - b.angularVelocity * rb.y, b.velocity.y + b.angularVelocity * rb.x);
          const rv = Vec2.sub(vb, va);

          const normalVel = rv.dot(m.normal);
          if (normalVel > 0) continue; // Separating

          const raCrossN = ra.cross(m.normal);
          const rbCrossN = rb.cross(m.normal);

          const invMassSum = a.invMass + b.invMass +
            (raCrossN * raCrossN) * a.invInertia +
            (rbCrossN * rbCrossN) * b.invInertia;

          if (invMassSum === 0) continue;

          // Restitution & Baumgarte positional stabilization
          const restitution = Math.min(a.restitution, b.restitution);
          const bias = (this.baumgarte * invDt) * Math.max(0, m.depth - this.slop);

          let j = -( (1 + restitution) * normalVel - bias) / invMassSum;
          j = Math.max(0, j);

          const impulse = Vec2.scale(m.normal, j);
          a.applyImpulse(Vec2.scale(impulse, -1), ra);
          b.applyImpulse(impulse, rb);

          // Friction impulse
          const tangent = m.normal.perpendicular();
          const tangentVel = rv.dot(tangent);
          const raCrossT = ra.cross(tangent);
          const rbCrossT = rb.cross(tangent);

          const invMassTangent = a.invMass + b.invMass +
            (raCrossT * raCrossT) * a.invInertia +
            (rbCrossT * rbCrossT) * b.invInertia;

          if (invMassTangent > 0) {
            const frictionCoeff = Math.sqrt(a.dynamicFriction * b.dynamicFriction);
            let jt = -tangentVel / invMassTangent;
            const maxJt = frictionCoeff * j;
            jt = Math.max(-maxJt, Math.min(maxJt, jt));

            const frictionImpulse = Vec2.scale(tangent, jt);
            a.applyImpulse(Vec2.scale(frictionImpulse, -1), ra);
            b.applyImpulse(frictionImpulse, rb);
          }
        }
      }
    }
  }
}
