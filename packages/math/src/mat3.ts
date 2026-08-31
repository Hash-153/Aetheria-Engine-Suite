import { Vec2 } from './vec2.js';

export class Mat3 {
  public elements: Float32Array;

  constructor() {
    this.elements = new Float32Array([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  public identity(): this {
    const e = this.elements;
    e[0] = 1; e[1] = 0; e[2] = 0;
    e[3] = 0; e[4] = 1; e[5] = 0;
    e[6] = 0; e[7] = 0; e[8] = 1;
    return this;
  }

  public set(
    m00: number, m01: number, m02: number,
    m10: number, m11: number, m12: number,
    m20: number, m21: number, m22: number
  ): this {
    const e = this.elements;
    e[0] = m00; e[1] = m10; e[2] = m20;
    e[3] = m01; e[4] = m11; e[5] = m21;
    e[6] = m02; e[7] = m12; e[8] = m22;
    return this;
  }

  public copy(m: Mat3): this {
    this.elements.set(m.elements);
    return this;
  }

  public clone(): Mat3 {
    const m = new Mat3();
    m.copy(this);
    return m;
  }

  public multiply(m: Mat3): this {
    Mat3.multiply(this, m, this);
    return this;
  }

  public static multiply(a: Mat3, b: Mat3, out = new Mat3()): Mat3 {
    const ae = a.elements;
    const be = b.elements;
    const te = out.elements;

    const a00 = ae[0]!, a01 = ae[3]!, a02 = ae[6]!;
    const a10 = ae[1]!, a11 = ae[4]!, a12 = ae[7]!;
    const a20 = ae[2]!, a21 = ae[5]!, a22 = ae[8]!;

    const b00 = be[0]!, b01 = be[3]!, b02 = be[6]!;
    const b10 = be[1]!, b11 = be[4]!, b12 = be[7]!;
    const b20 = be[2]!, b21 = be[5]!, b22 = be[8]!;

    te[0] = a00 * b00 + a01 * b10 + a02 * b20;
    te[3] = a00 * b01 + a01 * b11 + a02 * b21;
    te[6] = a00 * b02 + a01 * b12 + a02 * b22;

    te[1] = a10 * b00 + a11 * b10 + a12 * b20;
    te[4] = a10 * b01 + a11 * b11 + a12 * b21;
    te[7] = a10 * b02 + a11 * b12 + a12 * b22;

    te[2] = a20 * b00 + a21 * b10 + a22 * b20;
    te[5] = a20 * b01 + a21 * b11 + a22 * b21;
    te[8] = a20 * b02 + a21 * b12 + a22 * b22;

    return out;
  }

  public translate(tx: number, ty: number): this {
    const e = this.elements;
    e[6] = e[0]! * tx + e[3]! * ty + e[6]!;
    e[7] = e[1]! * tx + e[4]! * ty + e[7]!;
    e[8] = e[2]! * tx + e[5]! * ty + e[8]!;
    return this;
  }

  public rotate(radians: number): this {
    const c = Math.cos(radians);
    const s = Math.sin(radians);
    const e = this.elements;

    const m00 = e[0]!, m01 = e[3]!;
    const m10 = e[1]!, m11 = e[4]!;
    const m20 = e[2]!, m21 = e[5]!;

    e[0] = c * m00 + s * m01;
    e[3] = -s * m00 + c * m01;
    e[1] = c * m10 + s * m11;
    e[4] = -s * m10 + c * m11;
    e[2] = c * m20 + s * m21;
    e[5] = -s * m20 + c * m21;

    return this;
  }

  public scale(sx: number, sy: number): this {
    const e = this.elements;
    e[0]! *= sx; e[1]! *= sx; e[2]! *= sx;
    e[3]! *= sy; e[4]! *= sy; e[5]! *= sy;
    return this;
  }

  public transformVec2(v: Vec2, out = new Vec2()): Vec2 {
    const e = this.elements;
    const x = v.x;
    const y = v.y;
    return out.set(
      e[0]! * x + e[3]! * y + e[6]!,
      e[1]! * x + e[4]! * y + e[7]!
    );
  }

  public invert(): this {
    const e = this.elements;
    const m00 = e[0]!, m01 = e[1]!, m02 = e[2]!;
    const m10 = e[3]!, m11 = e[4]!, m12 = e[5]!;
    const m20 = e[6]!, m21 = e[7]!, m22 = e[8]!;

    const b01 = m22 * m11 - m12 * m21;
    const b11 = -m22 * m10 + m12 * m20;
    const b21 = m21 * m10 - m11 * m20;

    let det = m00 * b01 + m01 * b11 + m02 * b21;
    if (Math.abs(det) < 1e-8) return this.identity();
    det = 1.0 / det;

    e[0] = b01 * det;
    e[1] = (-m22 * m01 + m02 * m21) * det;
    e[2] = (m12 * m01 - m02 * m11) * det;
    e[3] = b11 * det;
    e[4] = (m22 * m00 - m02 * m20) * det;
    e[5] = (-m12 * m00 + m02 * m10) * det;
    e[6] = b21 * det;
    e[7] = (-m21 * m00 + m01 * m20) * det;
    e[8] = (m11 * m00 - m01 * m10) * det;

    return this;
  }
}
