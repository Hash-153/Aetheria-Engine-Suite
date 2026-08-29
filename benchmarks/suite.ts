import { World } from '../packages/ecs/src/index.js';
import { Vec2 } from '../packages/math/src/index.js';
import { DynamicBVH2D } from '../packages/physics/src/index.js';
import { AABB2D } from '../packages/math/src/index.js';

console.log("==========================================");
console.log("⚡ Aetheria Engine Performance Benchmarks");
console.log("==========================================");

// 1. ECS Stress Test (10,000 Entities)
{
  class Pos { constructor(public x = 0, public y = 0) {} }
  class Vel { constructor(public vx = 1, public vy = 1) {} }

  const world = new World();
  for (let i = 0; i < 10000; i++) {
    const e = world.createEntity();
    world.addComponent(e, Pos, new Pos(i, i));
    world.addComponent(e, Vel, new Vel(1, 1));
  }

  const start = performance.now();
  for (let step = 0; step < 60; step++) {
    for (const ent of world.query(Pos, Vel)) {
      const p = world.getComponent(ent, Pos)!;
      const v = world.getComponent(ent, Vel)!;
      p.x += v.vx;
      p.y += v.vy;
    }
  }
  const duration = performance.now() - start;
  console.log(`✔ ECS 10,000 Entities 60-Frames Simulation: ${duration.toFixed(2)}ms (${(60000 / duration).toFixed(0)} FPS)`);
}

// 2. Dynamic BVH Insertion & Query (5,000 Nodes)
{
  const bvh = new DynamicBVH2D();
  const start = performance.now();
  for (let i = 0; i < 5000; i++) {
    bvh.insert(i, new AABB2D(new Vec2(i * 10, i * 10), new Vec2(i * 10 + 20, i * 10 + 20)));
  }
  const queryBox = new AABB2D(new Vec2(500, 500), new Vec2(1500, 1500));
  const hits = bvh.queryOverlaps(queryBox);
  const duration = performance.now() - start;
  console.log(`✔ BVH 5,000 Nodes SAH Build & Query (${hits.length} hits): ${duration.toFixed(2)}ms`);
}

console.log("==========================================");
