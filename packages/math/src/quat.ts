import { Vec3 } from './vec3.js';

export class Quat {
  public x: number;
  public y: number;
  public z: number;
  public w: number;

  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  public static readonly IDENTITY = new Quat(0, 0, 0, 1);

  public set(x: number, y: number, z: number, w: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }

  public copy(q: Quat): this {
    this.x = q.x;
    this.y = q.y;
    this.z = q.z;
    this.w = q.w;
    return this;
  }

  public clone(): Quat {
    return new Quat(this.x, this.y, this.z, this.w);
  }

  public identity(): this {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 1;
    return this;
  }

  public static fromAxisAngle(axis: Vec3, angleRadians: number, out = new Quat()): Quat {
    const half = angleRadians * 0.5;
    const s = Math.sin(half);
    return out.set(axis.x * s, axis.y * s, axis.z * s, Math.cos(half));
  }

  public static fromEuler(pitch: number, yaw: number, roll: number, out = new Quat()): Quat {
    const c1 = Math.cos(pitch * 0.5);
    const c2 = Math.cos(yaw * 0.5);
    const c3 = Math.cos(roll * 0.5);
    const s1 = Math.sin(pitch * 0.5);
    const s2 = Math.sin(yaw * 0.5);
    const s3 = Math.sin(roll * 0.5);

    out.x = s1 * c2 * c3 + c1 * s2 * s3;
    out.y = c1 * s2 * c3 - s1 * c2 * s3;
    out.z = c1 * c2 * s3 + s1 * s2 * c3;
    out.w = c1 * c2 * c3 - s1 * s2 * s3;
    return out;
  }

  public multiply(q: Quat): this {
    Quat.multiply(this, q, this);
    return this;
  }

  public static multiply(a: Quat, b: Quat, out = new Quat()): Quat {
    const ax = a.x, ay = a.y, az = a.z, aw = a.w;
    const bx = b.x, by = b.y, bz = b.z, bw = b.w;

    out.x = ax * bw + aw * bx + ay * bz - az * by;
    out.y = ay * bw + aw * by + az * bx - ax * bz;
    out.z = az * bw + aw * bz + ax * by - ay * bx;
    out.w = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }

  public normalize(): this {
    let len = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    if (len > 1e-8) {
      len = 1 / len;
      this.x *= len;
      this.y *= len;
      this.z *= len;
      this.w *= len;
    } else {
      this.identity();
    }
    return this;
  }

  public invert(): this {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  public slerp(target: Quat, t: number): Quat {
    return Quat.slerp(this, target, t, this);
  }

  public static slerp(a: Quat, b: Quat, t: number, out = new Quat()): Quat {
    let bx = b.x, by = b.y, bz = b.z, bw = b.w;
    let cosTheta = a.x * bx + a.y * by + a.z * bz + a.w * bw;

    if (cosTheta < 0) {
      cosTheta = -cosTheta;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }

    if (cosTheta > 0.9995) {
      out.x = a.x + (bx - a.x) * t;
      out.y = a.y + (by - a.y) * t;
      out.z = a.z + (bz - a.z) * t;
      out.w = a.w + (bw - a.w) * t;
      return out.normalize();
    }

    const theta = Math.acos(cosTheta);
    const sinTheta = Math.sin(theta);
    const scaleA = Math.sin((1 - t) * theta) / sinTheta;
    const scaleB = Math.sin(t * theta) / sinTheta;

    out.x = a.x * scaleA + bx * scaleB;
    out.y = a.y * scaleA + by * scaleB;
    out.z = a.z * scaleA + bz * scaleB;
    out.w = a.w * scaleA + bw * scaleB;
    return out;
  }
}
