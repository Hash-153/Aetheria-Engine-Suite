import { Vec2 } from '../../math/src/index.js';
import { SpriteBatch2D } from '../../renderer/src/index.js';

export enum GridType {
  Orthogonal = 0,
  Isometric = 1,
  Hexagonal = 2
}

export interface TileLayer {
  name: string;
  data: Int32Array;
  visible: boolean;
  opacity: number;
}

export class Tilemap {
  public width: number;
  public height: number;
  public tileWidth: number;
  public tileHeight: number;
  public gridType: GridType;
  public layers: TileLayer[] = [];

  constructor(width = 100, height = 100, tileWidth = 32, tileHeight = 32, gridType = GridType.Orthogonal) {
    this.width = width;
    this.height = height;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.gridType = gridType;
  }

  public createLayer(name: string): TileLayer {
    const layer: TileLayer = {
      name,
      data: new Int32Array(this.width * this.height),
      visible: true,
      opacity: 1.0
    };
    this.layers.push(layer);
    return layer;
  }

  public setTile(layerIdx: number, x: number, y: number, tileId: number): void {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;
    const layer = this.layers[layerIdx];
    if (layer) {
      layer.data[y * this.width + x] = tileId;
    }
  }

  public getTile(layerIdx: number, x: number, y: number): number {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return -1;
    const layer = this.layers[layerIdx];
    return layer ? layer.data[y * this.width + x]! : -1;
  }

  public worldToGrid(worldX: number, worldY: number, out = new Vec2()): Vec2 {
    if (this.gridType === GridType.Isometric) {
      const halfW = this.tileWidth * 0.5;
      const halfH = this.tileHeight * 0.5;
      const gx = Math.floor((worldX / halfW + worldY / halfH) * 0.5);
      const gy = Math.floor((worldY / halfH - worldX / halfW) * 0.5);
      return out.set(gx, gy);
    }
    return out.set(Math.floor(worldX / this.tileWidth), Math.floor(worldY / this.tileHeight));
  }

  public gridToWorld(gridX: number, gridY: number, out = new Vec2()): Vec2 {
    if (this.gridType === GridType.Isometric) {
      const halfW = this.tileWidth * 0.5;
      const halfH = this.tileHeight * 0.5;
      const wx = (gridX - gridY) * halfW;
      const wy = (gridX + gridY) * halfH;
      return out.set(wx, wy);
    }
    return out.set(gridX * this.tileWidth, gridY * this.tileHeight);
  }
}
