import { Vec2 } from './vec2.js';
import { Vec3 } from './vec3.js';

export class AABB2D {
  public min: Vec2;
  public max: Vec2;

  constructor(min = new Vec2(Infinity, Infinity), max = new Vec2(-Infinity, -Infinity)) {
    this.min = min;
    this.max = max;
  }

  public set(minX: number, minY: number, maxX: number, maxY: number): this {
    this.min.set(minX, minY);
    this.max.set(maxX, maxY);
    return this;
  }

  public reset(): this {
    this.min.set(Infinity, Infinity);
    this.max.set(-Infinity, -Infinity);
    return this;
  }

  public expandByPoint(p: Vec2): this {
    this.min.x = Math.min(this.min.x, p.x);
    this.min.y = Math.min(this.min.y, p.y);
    this.max.x = Math.max(this.max.x, p.x);
    this.max.y = Math.max(this.max.y, p.y);
    return this;
  }

  public intersects(other: AABB2D): boolean {
    return !(
      this.max.x < other.min.x ||
      this.min.x > other.max.x ||
      this.max.y < other.min.y ||
      this.min.y > other.max.y
    );
  }

  public containsPoint(p: Vec2): boolean {
    return (
      p.x >= this.min.x &&
      p.x <= this.max.x &&
      p.y >= this.min.y &&
      p.y <= this.max.y
    );
  }

  public getCenter(out = new Vec2()): Vec2 {
    return out.set((this.min.x + this.max.x) * 0.5, (this.min.y + this.max.y) * 0.5);
  }

  public getExtents(out = new Vec2()): Vec2 {
    return out.set((this.max.x - this.min.x) * 0.5, (this.max.y - this.min.y) * 0.5);
  }

  public surfaceArea(): number {
    const w = Math.max(0, this.max.x - this.min.x);
    const h = Math.max(0, this.max.y - this.min.y);
    return 2 * (w + h);
  }
}

export class Ray2D {
  public origin: Vec2;
  public direction: Vec2;

  constructor(origin = new Vec2(), direction = new Vec2(1, 0)) {
    this.origin = origin;
    this.direction = direction.normalize();
  }

  public intersectAABB(box: AABB2D): { hit: boolean; tMin: number; tMax: number } {
    const invDirX = 1.0 / (this.direction.x || 1e-8);
    const invDirY = 1.0 / (this.direction.y || 1e-8);

    let t1 = (box.min.x - this.origin.x) * invDirX;
    let t2 = (box.max.x - this.origin.x) * invDirX;
    let t3 = (box.min.y - this.origin.y) * invDirY;
    let t4 = (box.max.y - this.origin.y) * invDirY;

    const tMin = Math.max(Math.min(t1, t2), Math.min(t3, t4));
    const tMax = Math.min(Math.max(t1, t2), Math.max(t3, t4));

    if (tMax < 0 || tMin > tMax) {
      return { hit: false, tMin: 0, tMax: 0 };
    }

    return { hit: true, tMin: Math.max(0, tMin), tMax };
  }
}

export class Circle {
  public center: Vec2;
  public radius: number;

  constructor(center = new Vec2(), radius = 1) {
    this.center = center;
    this.radius = radius;
  }

  public intersects(other: Circle): boolean {
    const distSq = this.center.distanceSq(other.center);
    const radSum = this.radius + other.radius;
    return distSq <= radSum * radSum;
  }

  public containsPoint(p: Vec2): boolean {
    return this.center.distanceSq(p) <= this.radius * this.radius;
  }
}
