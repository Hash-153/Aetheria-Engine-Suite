import { Vec2, AABB2D } from '../../math/src/index.js';
import { RigidBody2D, BodyType } from './rigidbody.js';
import { DynamicBVH2D } from './bvh.js';
import { SequentialImpulseSolver, ContactManifold } from './solver.js';

export class PhysicsWorld2D {
  public gravity: Vec2 = new Vec2(0, 980); // px/s^2
  public bodies: Map<number, RigidBody2D> = new Map();
  public bvh = new DynamicBVH2D();
  public solver = new SequentialImpulseSolver();
  private nextBodyId = 1;

  public createBody(type = BodyType.Dynamic, position = new Vec2()): RigidBody2D {
    const id = this.nextBodyId++;
    const body = new RigidBody2D(id, type, position);
    this.bodies.set(id, body);
    this.bvh.insert(id, body.getAABB());
    return body;
  }

  public removeBody(id: number): boolean {
    if (!this.bodies.has(id)) return false;
    this.bvh.remove(id);
    this.bodies.delete(id);
    return true;
  }

  public step(dt: number): void {
    // 1. Integrate forces & update BVH
    for (const body of this.bodies.values()) {
      body.integrate(dt, this.gravity);
      this.bvh.update(body.id, body.getAABB());
    }

    // 2. Broadphase & Narrowphase collision detection
    const manifolds: ContactManifold[] = [];
    const checkedPairs = new Set<string>();

    for (const bodyA of this.bodies.values()) {
      const aabb = bodyA.getAABB();
      const candidates = this.bvh.queryOverlaps(aabb);

      for (let i = 0; i < candidates.length; i++) {
        const otherId = candidates[i]!;
        if (bodyA.id >= otherId) continue; // avoid duplicate pairs

        const bodyB = this.bodies.get(otherId)!;
        if (bodyA.type === BodyType.Static && bodyB.type === BodyType.Static) continue;

        const manifold = this.detectCollision(bodyA, bodyB);
        if (manifold) {
          manifolds.push(manifold);
        }
      }
    }

    // 3. Solve velocity & positional constraints
    this.solver.solve(manifolds, dt);
  }

  private detectCollision(a: RigidBody2D, b: RigidBody2D): ContactManifold | null {
    // Circle-to-Circle
    if (a.isCircle && b.isCircle) {
      const delta = Vec2.sub(b.position, a.position);
      const dist = delta.length();
      const radSum = a.radius + b.radius;
      if (dist >= radSum || dist < 1e-6) return null;

      const normal = Vec2.scale(delta, 1.0 / dist);
      const depth = radSum - dist;
      const contact = Vec2.add(a.position, Vec2.scale(normal, a.radius));

      return {
        bodyA: a,
        bodyB: b,
        normal,
        depth,
        contacts: [contact]
      };
    }

    // Box-to-Box (AABB simplification for speed)
    const dx = b.position.x - a.position.x;
    const dy = b.position.y - a.position.y;
    const hx = (a.width + b.width) * 0.5;
    const hy = (a.height + b.height) * 0.5;

    const overlapX = hx - Math.abs(dx);
    if (overlapX <= 0) return null;

    const overlapY = hy - Math.abs(dy);
    if (overlapY <= 0) return null;

    let normal: Vec2;
    let depth: number;

    if (overlapX < overlapY) {
      normal = new Vec2(dx > 0 ? 1 : -1, 0);
      depth = overlapX;
    } else {
      normal = new Vec2(0, dy > 0 ? 1 : -1);
      depth = overlapY;
    }

    const contact = new Vec2(
      a.position.x + normal.x * (a.width * 0.5),
      a.position.y + normal.y * (a.height * 0.5)
    );

    return {
      bodyA: a,
      bodyB: b,
      normal,
      depth,
      contacts: [contact]
    };
  }
}
