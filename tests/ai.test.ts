import { AStarGrid2D } from '../packages/ai/src/index.js';

export function testAI(): void {
  console.log("--> Testing @aetheria/ai...");

  const grid = new AStarGrid2D(10, 10);
  grid.setWalkable(1, 0, false);
  grid.setWalkable(1, 1, false);

  const path = grid.findPath(0, 0, 2, 0);
  if (path.length === 0) throw new Error("A* failed to navigate obstacle");

  console.log("✔ @aetheria/ai tests passed successfully.");
}
