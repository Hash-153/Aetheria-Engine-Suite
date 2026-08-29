export class CellularAutomataCaves {
  public width: number;
  public height: number;
  public grid: number[][]; // 0: Floor, 1: Wall

  constructor(width = 60, height = 40, fillProb = 0.45) {
    this.width = width;
    this.height = height;
    this.grid = [];

    for (let x = 0; x < width; x++) {
      this.grid[x] = [];
      for (let y = 0; y < height; y++) {
        if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
          this.grid[x]![y] = 1;
        } else {
          this.grid[x]![y] = Math.random() < fillProb ? 1 : 0;
        }
      }
    }
  }

  public smooth(iterations = 4): void {
    for (let it = 0; it < iterations; it++) {
      const next: number[][] = [];
      for (let x = 0; x < this.width; x++) {
        next[x] = [];
        for (let y = 0; y < this.height; y++) {
          const count = this.getSurroundingWallCount(x, y);
          if (count > 4) {
            next[x]![y] = 1;
          } else if (count < 4) {
            next[x]![y] = 0;
          } else {
            next[x]![y] = this.grid[x]![y]!;
          }
        }
      }
      this.grid = next;
    }
  }

  private getSurroundingWallCount(gridX: number, gridY: number): number {
    let count = 0;
    for (let nx = gridX - 1; nx <= gridX + 1; nx++) {
      for (let ny = gridY - 1; ny <= gridY + 1; ny++) {
        if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
          if (nx !== gridX || ny !== gridY) {
            count += this.grid[nx]![ny]!;
          }
        } else {
          count++;
        }
      }
    }
    return count;
  }
}
