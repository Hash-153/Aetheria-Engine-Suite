import { PhysicsWorld2D, BodyType } from '../packages/physics/src/index.js';
import { Vec2 } from '../packages/math/src/index.js';

export function testPhysics(): void {
  console.log("--> Testing @aetheria/physics...");

  const world = new PhysicsWorld2D();
  world.gravity.set(0, 100);

  const body = world.createBody(BodyType.Dynamic, new Vec2(0, 0));
  world.step(0.1);

  if (body.position.y <= 0) throw new Error("Physics gravity integration failed");

  console.log("✔ @aetheria/physics tests passed successfully.");
}
