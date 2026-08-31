import { Vec3 } from './vec3.js';
import { Quat } from './quat.js';

export class DualQuat {
  public real: Quat;
  public dual: Quat;

  constructor(real = new Quat(0, 0, 0, 1), dual = new Quat(0, 0, 0, 0)) {
    this.real = real.clone();
    this.dual = dual.clone();
  }

  public static identity(): DualQuat {
    return new DualQuat();
  }

  public set(real: Quat, dual: Quat): this {
    this.real.copy(real);
    this.dual.copy(dual);
    return this;
  }

  public copy(dq: DualQuat): this {
    this.real.copy(dq.real);
    this.dual.copy(dq.dual);
    return this;
  }

  public static fromRotationTranslation(rotation: Quat, translation: Vec3, out = new DualQuat()): DualQuat {
    out.real.copy(rotation);
    out.dual.set(
      0.5 * ( translation.x * rotation.w + translation.y * rotation.z - translation.z * rotation.y),
      0.5 * (-translation.x * rotation.z + translation.y * rotation.w + translation.z * rotation.x),
      0.5 * ( translation.x * rotation.y - translation.y * rotation.x + translation.z * rotation.w),
      -0.5 * (translation.x * rotation.x + translation.y * rotation.y + translation.z * rotation.z)
    );
    return out;
  }

  public getTranslation(out = new Vec3()): Vec3 {
    const rx = this.real.x, ry = this.real.y, rz = this.real.z, rw = this.real.w;
    const dx = this.dual.x, dy = this.dual.y, dz = this.dual.z, dw = this.dual.w;

    return out.set(
      2.0 * (-dw * rx + dx * rw - dy * rz + dz * ry),
      2.0 * (-dw * ry + dx * rz + dy * rw - dz * rx),
      2.0 * (-dw * rz - dx * ry + dy * rx + dz * rw)
    );
  }

  public multiply(dq: DualQuat): this {
    DualQuat.multiply(this, dq, this);
    return this;
  }

  public static multiply(a: DualQuat, b: DualQuat, out = new DualQuat()): DualQuat {
    const r = Quat.multiply(a.real, b.real);
    const d1 = Quat.multiply(a.real, b.dual);
    const d2 = Quat.multiply(a.dual, b.real);
    const d = new Quat(d1.x + d2.x, d1.y + d2.y, d1.z + d2.z, d1.w + d2.w);
    return out.set(r, d);
  }

  public normalize(): this {
    const norm = Math.sqrt(this.real.x * this.real.x + this.real.y * this.real.y + this.real.z * this.real.z + this.real.w * this.real.w);
    if (norm > 1e-8) {
      const inv = 1.0 / norm;
      this.real.x *= inv;
      this.real.y *= inv;
      this.real.z *= inv;
      this.real.w *= inv;
      this.dual.x *= inv;
      this.dual.y *= inv;
      this.dual.z *= inv;
      this.dual.w *= inv;
    }
    return this;
  }
}
