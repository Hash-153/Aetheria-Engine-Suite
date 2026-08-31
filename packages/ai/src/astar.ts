import { Vec2 } from '../../math/src/index.js';

export interface GridNode {
  x: number;
  y: number;
  walkable: boolean;
  gCost: number;
  hCost: number;
  fCost: number;
  parent?: GridNode;
}

export class AStarGrid2D {
  public width: number;
  public height: number;
  public nodes: GridNode[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.nodes = [];

    for (let x = 0; x < width; x++) {
      this.nodes[x] = [];
      for (let y = 0; y < height; y++) {
        this.nodes[x]![y] = {
          x,
          y,
          walkable: true,
          gCost: Infinity,
          hCost: 0,
          fCost: Infinity
        };
      }
    }
  }

  public setWalkable(x: number, y: number, walkable: boolean): void {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.nodes[x]![y]!.walkable = walkable;
    }
  }

  public findPath(startX: number, startY: number, targetX: number, targetY: number): Vec2[] {
    if (
      startX < 0 || startX >= this.width || startY < 0 || startY >= this.height ||
      targetX < 0 || targetX >= this.width || targetY < 0 || targetY >= this.height
    ) {
      return [];
    }

    const startNode = this.nodes[startX]![startY]!;
    const targetNode = this.nodes[targetX]![targetY]!;

    if (!targetNode.walkable) return [];

    // Reset node costs
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const n = this.nodes[x]![y]!;
        n.gCost = Infinity;
        n.hCost = 0;
        n.fCost = Infinity;
        n.parent = undefined;
      }
    }

    startNode.gCost = 0;
    startNode.hCost = this.heuristic(startNode, targetNode);
    startNode.fCost = startNode.hCost;

    const openSet: GridNode[] = [startNode];
    const closedSet = new Set<GridNode>();

    while (openSet.length > 0) {
      // Find node with lowest fCost
      let lowestIdx = 0;
      for (let i = 1; i < openSet.length; i++) {
        if (openSet[i]!.fCost < openSet[lowestIdx]!.fCost) {
          lowestIdx = i;
        }
      }

      const current = openSet.splice(lowestIdx, 1)[0]!;
      if (current === targetNode) {
        return this.reconstructPath(targetNode);
      }

      closedSet.add(current);

      const neighbors = this.getNeighbors(current);
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i]!;
        if (!neighbor.walkable || closedSet.has(neighbor)) continue;

        const isDiagonal = neighbor.x !== current.x && neighbor.y !== current.y;
        const tentativeG = current.gCost + (isDiagonal ? 1.414 : 1.0);

        if (tentativeG < neighbor.gCost) {
          neighbor.parent = current;
          neighbor.gCost = tentativeG;
          neighbor.hCost = this.heuristic(neighbor, targetNode);
          neighbor.fCost = neighbor.gCost + neighbor.hCost;

          if (!openSet.includes(neighbor)) {
            openSet.push(neighbor);
          }
        }
      }
    }

    return [];
  }

  private heuristic(a: GridNode, b: GridNode): number {
    const dx = Math.abs(a.x - b.x);
    const dy = Math.abs(a.y - b.y);
    return Math.max(dx, dy) + 0.414 * Math.min(dx, dy); // Octile distance
  }

  private getNeighbors(node: GridNode): GridNode[] {
    const res: GridNode[] = [];
    const dirs = [
      [0, 1], [0, -1], [1, 0], [-1, 0],
      [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    for (let i = 0; i < dirs.length; i++) {
      const nx = node.x + dirs[i]![0]!;
      const ny = node.y + dirs[i]![1]!;
      if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
        res.push(this.nodes[nx]![ny]!);
      }
    }
    return res;
  }

  private reconstructPath(endNode: GridNode): Vec2[] {
    const path: Vec2[] = [];
    let curr: GridNode | undefined = endNode;
    while (curr) {
      path.push(new Vec2(curr.x, curr.y));
      curr = curr.parent;
    }
    return path.reverse();
  }
}
