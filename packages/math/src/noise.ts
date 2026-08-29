export class SimplexNoise {
  private perm: Uint8Array;
  private permMod12: Uint8Array;

  constructor(seed = 1337) {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;

    let s = seed;
    for (let i = 255; i > 0; i--) {
      s |= 0; s = s + 0x6D2B79F5 | 0;
      let t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      const j = ((t ^ t >>> 14) >>> 0) % (i + 1);
      const tmp = p[i]!;
      p[i] = p[j]!;
      p[j] = tmp;
    }

    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255]!;
      this.permMod12[i] = (this.perm[i]! % 12);
    }
  }

  private static readonly F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  private static readonly G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  private static readonly GRAD3 = new Float32Array([
    1,1,0, -1,1,0, 1,-1,0, -1,-1,0,
    1,0,1, -1,0,1, 1,0,-1, -1,0,-1,
    0,1,1, 0,-1,1, 0,1,-1, 0,-1,-1
  ]);

  public noise2D(xin: number, yin: number): number {
    const F2 = SimplexNoise.F2;
    const G2 = SimplexNoise.G2;

    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1: number, j1: number;
    if (x0 > y0) { i1 = 1; j1 = 0; }
    else { i1 = 0; j1 = 1; }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1.0 + 2.0 * G2;
    const y2 = y0 - 1.0 + 2.0 * G2;

    const ii = i & 255;
    const jj = j & 255;

    const gi0 = this.permMod12[ii + this.perm[jj]!]! * 3;
    const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1]!]! * 3;
    const gi2 = this.permMod12[ii + 1 + this.perm[jj + 1]!]! * 3;

    let t0 = 0.5 - x0 * x0 - y0 * y0;
    let n0 = 0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * (SimplexNoise.GRAD3[gi0]! * x0 + SimplexNoise.GRAD3[gi0 + 1]! * y0);
    }

    let t1 = 0.5 - x1 * x1 - y1 * y1;
    let n1 = 0;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * (SimplexNoise.GRAD3[gi1]! * x1 + SimplexNoise.GRAD3[gi1 + 1]! * y1);
    }

    let t2 = 0.5 - x2 * x2 - y2 * y2;
    let n2 = 0;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * (SimplexNoise.GRAD3[gi2]! * x2 + SimplexNoise.GRAD3[gi2 + 1]! * y2);
    }

    return 70.0 * (n0 + n1 + n2);
  }

  public fbm2D(x: number, y: number, octaves = 4, lacunarity = 2.0, gain = 0.5): number {
    let total = 0;
    let frequency = 1.0;
    let amplitude = 1.0;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      total += this.noise2D(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= gain;
      frequency *= lacunarity;
    }

    return total / maxValue;
  }
}
