import { Vec2 } from './vec2.js';

export class ConvexHull2D {
  public static compute(points: Vec2[]): Vec2[] {
    if (points.length <= 3) return [...points];

    const sorted = [...points].sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.x);

    const cross = (o: Vec2, a: Vec2, b: Vec2) => {
      return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    };

    const lower: Vec2[] = [];
    for (let i = 0; i < sorted.length; i++) {
      const p = sorted[i]!;
      while (lower.length >= 2 && cross(lower[lower.length - 2]!, lower[lower.length - 1]!, p) <= 0) {
        lower.pop();
      }
      lower.push(p);
    }

    const upper: Vec2[] = [];
    for (let i = sorted.length - 1; i >= 0; i--) {
      const p = sorted[i]!;
      while (upper.length >= 2 && cross(upper[upper.length - 2]!, upper[upper.length - 1]!, p) <= 0) {
        upper.pop();
      }
      upper.push(p);
    }

    lower.pop();
    upper.pop();
    return lower.concat(upper);
  }
}
