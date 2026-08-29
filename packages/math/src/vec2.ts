export class Vec2 {
  public x: number;
  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public static readonly ZERO = new Vec2(0, 0);
  public static readonly ONE = new Vec2(1, 1);
  public static readonly UP = new Vec2(0, -1);
  public static readonly DOWN = new Vec2(0, 1);
  public static readonly LEFT = new Vec2(-1, 0);
  public static readonly RIGHT = new Vec2(1, 0);

  public set(x: number, y: number): this {
    this.x = x;
    this.y = y;
    return this;
  }

  public copy(v: Vec2): this {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  public clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  public add(v: Vec2): this {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  public static add(a: Vec2, b: Vec2, out = new Vec2()): Vec2 {
    return out.set(a.x + b.x, a.y + b.y);
  }

  public sub(v: Vec2): this {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  public static sub(a: Vec2, b: Vec2, out = new Vec2()): Vec2 {
    return out.set(a.x - b.x, a.y - b.y);
  }

  public scale(s: number): this {
    this.x *= s;
    this.y *= s;
    return this;
  }

  public static scale(v: Vec2, s: number, out = new Vec2()): Vec2 {
    return out.set(v.x * s, v.y * s);
  }

  public multiply(v: Vec2): this {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  public divide(v: Vec2): this {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  public dot(v: Vec2): number {
    return this.x * v.x + this.y * v.y;
  }

  public cross(v: Vec2): number {
    return this.x * v.y - this.y * v.x;
  }

  public lengthSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  public length(): number {
    return Math.sqrt(this.lengthSq());
  }

  public distanceSq(v: Vec2): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  public distance(v: Vec2): number {
    return Math.sqrt(this.distanceSq(v));
  }

  public normalize(): this {
    const len = this.length();
    if (len > 1e-8) {
      const inv = 1 / len;
      this.x *= inv;
      this.y *= inv;
    } else {
      this.x = 0;
      this.y = 0;
    }
    return this;
  }

  public negate(): this {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  public perpendicular(): Vec2 {
    return new Vec2(-this.y, this.x);
  }

  public angle(): number {
    return Math.atan2(this.y, this.x);
  }

  public static fromAngle(radians: number, length = 1, out = new Vec2()): Vec2 {
    return out.set(Math.cos(radians) * length, Math.sin(radians) * length);
  }

  public rotate(radians: number): this {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const rx = this.x * cos - this.y * sin;
    const ry = this.x * sin + this.y * cos;
    this.x = rx;
    this.y = ry;
    return this;
  }

  public lerp(target: Vec2, t: number): this {
    this.x += (target.x - this.x) * t;
    this.y += (target.y - this.y) * t;
    return this;
  }

  public static lerp(a: Vec2, b: Vec2, t: number, out = new Vec2()): Vec2 {
    return out.set(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
  }

  public clampLength(min: number, max: number): this {
    const len = this.length();
    if (len < 1e-8) return this;
    if (len < min) {
      this.scale(min / len);
    } else if (len > max) {
      this.scale(max / len);
    }
    return this;
  }

  public reflect(normal: Vec2): this {
    const d = 2 * this.dot(normal);
    this.x -= d * normal.x;
    this.y -= d * normal.y;
    return this;
  }

  public equals(v: Vec2, epsilon = 1e-6): boolean {
    return Math.abs(this.x - v.x) <= epsilon && Math.abs(this.y - v.y) <= epsilon;
  }

  public toArray(): [number, number] {
    return [this.x, this.y];
  }

  public static fromArray(arr: ArrayLike<number>, offset = 0, out = new Vec2()): Vec2 {
    return out.set(arr[offset] ?? 0, arr[offset + 1] ?? 0);
  }
}
