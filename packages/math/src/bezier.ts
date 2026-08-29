import { Vec2 } from './vec2.js';

export class BezierCurve2D {
  public static quadratic(p0: Vec2, p1: Vec2, p2: Vec2, t: number, out = new Vec2()): Vec2 {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const ut2 = 2 * u * t;

    out.x = uu * p0.x + ut2 * p1.x + tt * p2.x;
    out.y = uu * p0.y + ut2 * p1.y + tt * p2.y;
    return out;
  }

  public static cubic(p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2, t: number, out = new Vec2()): Vec2 {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;

    out.x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
    out.y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;
    return out;
  }

  public static catmullRom(p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2, t: number, out = new Vec2()): Vec2 {
    const t2 = t * t;
    const t3 = t2 * t;

    const f0 = -0.5 * t3 + t2 - 0.5 * t;
    const f1 = 1.5 * t3 - 2.5 * t2 + 1.0;
    const f2 = -1.5 * t3 + 2.0 * t2 + 0.5 * t;
    const f3 = 0.5 * t3 - 0.5 * t2;

    out.x = p0.x * f0 + p1.x * f1 + p2.x * f2 + p3.x * f3;
    out.y = p0.y * f0 + p1.y * f1 + p2.y * f2 + p3.y * f3;
    return out;
  }
}
