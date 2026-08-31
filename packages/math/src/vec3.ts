import { Mat4 } from './mat4.js';
import { Quat } from './quat.js';

export class Vec3 {
  public x: number;
  public y: number;
  public z: number;

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public static readonly ZERO = new Vec3(0, 0, 0);
  public static readonly ONE = new Vec3(1, 1, 1);
  public static readonly UP = new Vec3(0, 1, 0);
  public static readonly DOWN = new Vec3(0, -1, 0);
  public static readonly FORWARD = new Vec3(0, 0, -1);
  public static readonly BACK = new Vec3(0, 0, 1);
  public static readonly LEFT = new Vec3(-1, 0, 0);
  public static readonly RIGHT = new Vec3(1, 0, 0);

  public set(x: number, y: number, z: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public copy(v: Vec3): this {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }

  public clone(): Vec3 {
    return new Vec3(this.x, this.y, this.z);
  }

  public add(v: Vec3): this {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  public static add(a: Vec3, b: Vec3, out = new Vec3()): Vec3 {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  public sub(v: Vec3): this {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  public static sub(a: Vec3, b: Vec3, out = new Vec3()): Vec3 {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  public scale(s: number): this {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  public static scale(v: Vec3, s: number, out = new Vec3()): Vec3 {
    return out.set(v.x * s, v.y * s, v.z * s);
  }

  public multiply(v: Vec3): this {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  public divide(v: Vec3): this {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  public dot(v: Vec3): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  public cross(v: Vec3): this {
    const x = this.y * v.z - this.z * v.y;
    const y = this.z * v.x - this.x * v.z;
    const z = this.x * v.y - this.y * v.x;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public static cross(a: Vec3, b: Vec3, out = new Vec3()): Vec3 {
    return out.set(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x
    );
  }

  public lengthSq(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public length(): number {
    return Math.sqrt(this.lengthSq());
  }

  public distanceSq(v: Vec3): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    const dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }

  public distance(v: Vec3): number {
    return Math.sqrt(this.distanceSq(v));
  }

  public normalize(): this {
    const len = this.length();
    if (len > 1e-8) {
      const inv = 1 / len;
      this.x *= inv;
      this.y *= inv;
      this.z *= inv;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }
    return this;
  }

  public negate(): this {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  public lerp(target: Vec3, t: number): this {
    this.x += (target.x - this.x) * t;
    this.y += (target.y - this.y) * t;
    this.z += (target.z - this.z) * t;
    return this;
  }

  public static lerp(a: Vec3, b: Vec3, t: number, out = new Vec3()): Vec3 {
    return out.set(
      a.x + (b.x - a.x) * t,
      a.y + (b.y - a.y) * t,
      a.z + (b.z - a.z) * t
    );
  }

  public applyMat4(m: Mat4): this {
    const e = m.elements;
    const x = this.x, y = this.y, z = this.z;
    const w = 1 / (e[3]! * x + e[7]! * y + e[11]! * z + e[15]!);
    this.x = (e[0]! * x + e[4]! * y + e[8]! * z + e[12]!) * w;
    this.y = (e[1]! * x + e[5]! * y + e[9]! * z + e[13]!) * w;
    this.z = (e[2]! * x + e[6]! * y + e[10]! * z + e[14]!) * w;
    return this;
  }

  public applyQuat(q: Quat): this {
    const x = this.x, y = this.y, z = this.z;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;
    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  }

  public equals(v: Vec3, epsilon = 1e-6): boolean {
    return (
      Math.abs(this.x - v.x) <= epsilon &&
      Math.abs(this.y - v.y) <= epsilon &&
      Math.abs(this.z - v.z) <= epsilon
    );
  }

  public toArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }
}
