import { World, SystemStage } from '../packages/ecs/src/index.js';

class Position { constructor(public x = 0, public y = 0) {} }
class Velocity { constructor(public vx = 0, public vy = 0) {} }

export function testECS(): void {
  console.log("--> Testing @aetheria/ecs...");

  const world = new World();
  const e1 = world.createEntity();
  world.addComponent(e1, Position, new Position(10, 20));
  world.addComponent(e1, Velocity, new Velocity(5, -2));

  let entityProcessed = 0;
  world.addSystem({
    update: (w, dt) => {
      for (const ent of w.query(Position, Velocity)) {
        const pos = w.getComponent(ent, Position)!;
        const vel = w.getComponent(ent, Velocity)!;
        pos.x += vel.vx * dt;
        pos.y += vel.vy * dt;
        entityProcessed++;
      }
    }
  });

  world.update(1.0);
  const p = world.getComponent(e1, Position)!;
  if (p.x !== 15 || p.y !== 18) throw new Error("ECS movement integration failed");
  if (entityProcessed !== 1) throw new Error("ECS query count mismatch");

  console.log("✔ @aetheria/ecs tests passed successfully.");
}
