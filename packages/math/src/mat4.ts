import { Vec3 } from './vec3.js';
import { Quat } from './quat.js';

export class Mat4 {
  public elements: Float32Array;

  constructor() {
    this.elements = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
  }

  public identity(): this {
    const e = this.elements;
    e.fill(0);
    e[0] = 1; e[5] = 1; e[10] = 1; e[15] = 1;
    return this;
  }

  public copy(m: Mat4): this {
    this.elements.set(m.elements);
    return this;
  }

  public clone(): Mat4 {
    const m = new Mat4();
    m.copy(this);
    return m;
  }

  public multiply(m: Mat4): this {
    Mat4.multiply(this, m, this);
    return this;
  }

  public static multiply(a: Mat4, b: Mat4, out = new Mat4()): Mat4 {
    const ae = a.elements;
    const be = b.elements;
    const te = out.elements;

    for (let i = 0; i < 4; i++) {
      const ai0 = ae[i]!, ai1 = ae[i + 4]!, ai2 = ae[i + 8]!, ai3 = ae[i + 12]!;
      te[i] = ai0 * be[0]! + ai1 * be[1]! + ai2 * be[2]! + ai3 * be[3]!;
      te[i + 4] = ai0 * be[4]! + ai1 * be[5]! + ai2 * be[6]! + ai3 * be[7]!;
      te[i + 8] = ai0 * be[8]! + ai1 * be[9]! + ai2 * be[10]! + ai3 * be[11]!;
      te[i + 12] = ai0 * be[12]! + ai1 * be[13]! + ai2 * be[14]! + ai3 * be[15]!;
    }
    return out;
  }

  public static ortho(
    left: number, right: number,
    bottom: number, top: number,
    near: number, far: number,
    out = new Mat4()
  ): Mat4 {
    const e = out.elements;
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);

    e.fill(0);
    e[0] = -2 * lr;
    e[5] = -2 * bt;
    e[10] = 2 * nf;
    e[12] = (left + right) * lr;
    e[13] = (top + bottom) * bt;
    e[14] = (far + near) * nf;
    e[15] = 1;
    return out;
  }

  public static perspective(
    fovYRadians: number,
    aspect: number,
    near: number,
    far: number,
    out = new Mat4()
  ): Mat4 {
    const e = out.elements;
    const f = 1.0 / Math.tan(fovYRadians / 2);
    const nf = 1 / (near - far);

    e.fill(0);
    e[0] = f / aspect;
    e[5] = f;
    e[10] = (far + near) * nf;
    e[11] = -1;
    e[14] = 2 * far * near * nf;
    e[15] = 0;
    return out;
  }

  public static lookAt(eye: Vec3, target: Vec3, up: Vec3, out = new Mat4()): Mat4 {
    const zAxis = Vec3.sub(eye, target).normalize();
    const xAxis = Vec3.cross(up, zAxis).normalize();
    const yAxis = Vec3.cross(zAxis, xAxis).normalize();

    const e = out.elements;
    e[0] = xAxis.x; e[4] = xAxis.y; e[8] = xAxis.z; e[12] = -xAxis.dot(eye);
    e[1] = yAxis.x; e[5] = yAxis.y; e[9] = yAxis.z; e[13] = -yAxis.dot(eye);
    e[2] = zAxis.x; e[6] = zAxis.y; e[10] = zAxis.z; e[14] = -zAxis.dot(eye);
    e[3] = 0; e[7] = 0; e[11] = 0; e[15] = 1;
    return out;
  }

  public static compose(position: Vec3, rotation: Quat, scale: Vec3, out = new Mat4()): Mat4 {
    const e = out.elements;
    const x = rotation.x, y = rotation.y, z = rotation.z, w = rotation.w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;

    const sx = scale.x, sy = scale.y, sz = scale.z;

    e[0] = (1 - (yy + zz)) * sx;
    e[1] = (xy + wz) * sx;
    e[2] = (xz - wy) * sx;
    e[3] = 0;

    e[4] = (xy - wz) * sy;
    e[5] = (1 - (xx + zz)) * sy;
    e[6] = (yz + wx) * sy;
    e[7] = 0;

    e[8] = (xz + wy) * sz;
    e[9] = (yz - wx) * sz;
    e[10] = (1 - (xx + yy)) * sz;
    e[11] = 0;

    e[12] = position.x;
    e[13] = position.y;
    e[14] = position.z;
    e[15] = 1;

    return out;
  }
}
