import { Vec2, AABB2D } from '../../math/src/index.js';

export class SpatialHashGrid2D {
  public cellSize: number;
  private grid = new Map<string, number[]>();

  constructor(cellSize = 64) {
    this.cellSize = cellSize;
  }

  private key(cellX: number, cellY: number): string {
    return `${cellX},${cellY}`;
  }

  public clear(): void {
    this.grid.clear();
  }

  public insert(id: number, aabb: AABB2D): void {
    const minX = Math.floor(aabb.min.x / this.cellSize);
    const minY = Math.floor(aabb.min.y / this.cellSize);
    const maxX = Math.floor(aabb.max.x / this.cellSize);
    const maxY = Math.floor(aabb.max.y / this.cellSize);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const k = this.key(x, y);
        let list = this.grid.get(k);
        if (!list) {
          list = [];
          this.grid.set(k, list);
        }
        list.push(id);
      }
    }
  }

  public query(aabb: AABB2D, results: Set<number> = new Set()): Set<number> {
    const minX = Math.floor(aabb.min.x / this.cellSize);
    const minY = Math.floor(aabb.min.y / this.cellSize);
    const maxX = Math.floor(aabb.max.x / this.cellSize);
    const maxY = Math.floor(aabb.max.y / this.cellSize);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const list = this.grid.get(this.key(x, y));
        if (list) {
          for (let i = 0; i < list.length; i++) {
            results.add(list[i]!);
          }
        }
      }
    }
    return results;
  }
}
