export class Fixed16 {
  public raw: number;
  public static readonly SHIFT = 16;
  public static readonly ONE = 1 << 16;
  public static readonly HALF = 1 << 15;

  constructor(raw = 0) {
    this.raw = raw | 0;
  }

  public static fromNumber(n: number): Fixed16 {
    return new Fixed16(Math.round(n * Fixed16.ONE) | 0);
  }

  public toNumber(): number {
    return this.raw / Fixed16.ONE;
  }

  public add(other: Fixed16): Fixed16 {
    return new Fixed16((this.raw + other.raw) | 0);
  }

  public sub(other: Fixed16): Fixed16 {
    return new Fixed16((this.raw - other.raw) | 0);
  }

  public mul(other: Fixed16): Fixed16 {
    const product = BigInt(this.raw) * BigInt(other.raw);
    return new Fixed16(Number(product >> 16n) | 0);
  }

  public div(other: Fixed16): Fixed16 {
    if (other.raw === 0) throw new Error("Division by zero in Fixed16");
    const num = (BigInt(this.raw) << 16n) / BigInt(other.raw);
    return new Fixed16(Number(num) | 0);
  }
}
