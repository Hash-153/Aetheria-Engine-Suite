export class BitPacker {
  private buffer: Uint8Array;
  private byteOffset: number = 0;
  private bitOffset: number = 0;

  constructor(sizeBytes = 1024) {
    this.buffer = new Uint8Array(sizeBytes);
  }

  public writeBits(value: number, numBits: number): void {
    for (let i = 0; i < numBits; i++) {
      const bit = (value >> i) & 1;
      if (bit) {
        this.buffer[this.byteOffset]! |= (1 << this.bitOffset);
      } else {
        this.buffer[this.byteOffset]! &= ~(1 << this.bitOffset);
      }

      this.bitOffset++;
      if (this.bitOffset === 8) {
        this.bitOffset = 0;
        this.byteOffset++;
      }
    }
  }

  public readBits(numBits: number): number {
    let value = 0;
    for (let i = 0; i < numBits; i++) {
      const bit = (this.buffer[this.byteOffset]! >> this.bitOffset) & 1;
      if (bit) {
        value |= (1 << i);
      }

      this.bitOffset++;
      if (this.bitOffset === 8) {
        this.bitOffset = 0;
        this.byteOffset++;
      }
    }
    return value;
  }

  public reset(): void {
    this.byteOffset = 0;
    this.bitOffset = 0;
  }

  public getBytes(): Uint8Array {
    const totalBytes = this.bitOffset > 0 ? this.byteOffset + 1 : this.byteOffset;
    return this.buffer.slice(0, totalBytes);
  }
}
