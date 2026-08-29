export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export class BSPNode {
  public rect: Rect;
  public left?: BSPNode;
  public right?: BSPNode;
  public room?: Rect;

  constructor(rect: Rect) {
    this.rect = rect;
  }

  public split(minSize = 6): boolean {
    if (this.left || this.right) return false;

    // Determine split orientation based on aspect ratio
    let splitH = Math.random() > 0.5;
    if (this.rect.w > this.rect.h && this.rect.w / this.rect.h >= 1.25) {
      splitH = false;
    } else if (this.rect.h > this.rect.w && this.rect.h / this.rect.w >= 1.25) {
      splitH = true;
    }

    const max = (splitH ? this.rect.h : this.rect.w) - minSize;
    if (max <= minSize) return false;

    const splitPos = Math.floor(minSize + Math.random() * (max - minSize));

    if (splitH) {
      this.left = new BSPNode({ x: this.rect.x, y: this.rect.y, w: this.rect.w, h: splitPos });
      this.right = new BSPNode({ x: this.rect.x, y: this.rect.y + splitPos, w: this.rect.w, h: this.rect.h - splitPos });
    } else {
      this.left = new BSPNode({ x: this.rect.x, y: this.rect.y, w: splitPos, h: this.rect.h });
      this.right = new BSPNode({ x: this.rect.x + splitPos, y: this.rect.y, w: this.rect.w - splitPos, h: this.rect.h });
    }

    return true;
  }

  public createRooms(minRoom = 4): void {
    if (this.left || this.right) {
      if (this.left) this.left.createRooms(minRoom);
      if (this.right) this.right.createRooms(minRoom);
    } else {
      const roomW = Math.floor(minRoom + Math.random() * (this.rect.w - minRoom - 1));
      const roomH = Math.floor(minRoom + Math.random() * (this.rect.h - minRoom - 1));
      const roomX = Math.floor(this.rect.x + 1 + Math.random() * (this.rect.w - roomW - 1));
      const roomY = Math.floor(this.rect.y + 1 + Math.random() * (this.rect.h - roomH - 1));

      this.room = { x: roomX, y: roomY, w: roomW, h: roomH };
    }
  }

  public getRoom(): Rect | undefined {
    if (this.room) return this.room;
    let lRoom: Rect | undefined;
    let rRoom: Rect | undefined;
    if (this.left) lRoom = this.left.getRoom();
    if (this.right) rRoom = this.right.getRoom();
    if (!lRoom && !rRoom) return undefined;
    if (!lRoom) return rRoom;
    if (!rRoom) return lRoom;
    return Math.random() > 0.5 ? lRoom : rRoom;
  }
}

export class BSPDungeonGenerator {
  public width: number;
  public height: number;
  public grid: number[][]; // 0: Wall, 1: Floor

  constructor(width = 64, height = 48) {
    this.width = width;
    this.height = height;
    this.grid = [];
    for (let x = 0; x < width; x++) {
      this.grid[x] = new Array(height).fill(0);
    }
  }

  public generate(maxSplits = 4, minRoom = 5): Rect[] {
    const root = new BSPNode({ x: 0, y: 0, w: this.width, h: this.height });
    const nodes: BSPNode[] = [root];

    for (let i = 0; i < maxSplits; i++) {
      const count = nodes.length;
      for (let j = 0; j < count; j++) {
        const node = nodes[j]!;
        if (!node.left && !node.right) {
          if (node.split(minRoom + 2)) {
            nodes.push(node.left!);
            nodes.push(node.right!);
          }
        }
      }
    }

    root.createRooms(minRoom);

    // Carve rooms into grid
    const rooms: Rect[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]!;
      if (node.room) {
        rooms.push(node.room);
        for (let rx = node.room.x; rx < node.room.x + node.room.w; rx++) {
          for (let ry = node.room.y; ry < node.room.y + node.room.h; ry++) {
            if (rx >= 0 && rx < this.width && ry >= 0 && ry < this.height) {
              this.grid[rx]![ry] = 1;
            }
          }
        }
      }
    }

    // Connect rooms with corridors
    this.carveCorridors(root);

    return rooms;
  }

  private carveCorridors(node: BSPNode): void {
    if (!node.left || !node.right) return;

    this.carveCorridors(node.left);
    this.carveCorridors(node.right);

    const roomA = node.left.getRoom();
    const roomB = node.right.getRoom();

    if (roomA && roomB) {
      const ax = Math.floor(roomA.x + roomA.w * 0.5);
      const ay = Math.floor(roomA.y + roomA.h * 0.5);
      const bx = Math.floor(roomB.x + roomB.w * 0.5);
      const by = Math.floor(roomB.y + roomB.h * 0.5);

      // L-shaped corridor
      let cx = ax;
      let cy = ay;

      while (cx !== bx) {
        this.grid[cx]![cy] = 1;
        cx += cx < bx ? 1 : -1;
      }
      while (cy !== by) {
        this.grid[cx]![cy] = 1;
        cy += cy < by ? 1 : -1;
      }
    }
  }
}
