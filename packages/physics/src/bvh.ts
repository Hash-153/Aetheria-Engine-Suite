import { Vec2, AABB2D, Ray2D } from '../../math/src/index.js';

export interface BVHNode {
  aabb: AABB2D;
  left?: BVHNode;
  right?: BVHNode;
  parent?: BVHNode;
  bodyId?: number;
  isLeaf: boolean;
}

export class DynamicBVH2D {
  private root?: BVHNode;
  private nodes = new Map<number, BVHNode>();

  public insert(bodyId: number, aabb: AABB2D): BVHNode {
    const leaf: BVHNode = {
      aabb: new AABB2D(aabb.min.clone(), aabb.max.clone()),
      bodyId,
      isLeaf: true
    };
    this.nodes.set(bodyId, leaf);

    if (!this.root) {
      this.root = leaf;
      return leaf;
    }

    // Surface Area Heuristic (SAH) based tree insertion
    let current = this.root;
    while (!current.isLeaf) {
      const left = current.left!;
      const right = current.right!;

      const combinedLeft = new AABB2D(left.aabb.min.clone(), left.aabb.max.clone()).expandByPoint(leaf.aabb.min).expandByPoint(leaf.aabb.max);
      const combinedRight = new AABB2D(right.aabb.min.clone(), right.aabb.max.clone()).expandByPoint(leaf.aabb.min).expandByPoint(leaf.aabb.max);

      const costLeft = combinedLeft.surfaceArea() - left.aabb.surfaceArea();
      const costRight = combinedRight.surfaceArea() - right.aabb.surfaceArea();

      if (costLeft < costRight) {
        current = left;
      } else {
        current = right;
      }
    }

    const oldSibling = current;
    const oldParent = oldSibling.parent;

    const newParent: BVHNode = {
      aabb: new AABB2D(oldSibling.aabb.min.clone(), oldSibling.aabb.max.clone()).expandByPoint(leaf.aabb.min).expandByPoint(leaf.aabb.max),
      parent: oldParent,
      left: oldSibling,
      right: leaf,
      isLeaf: false
    };

    oldSibling.parent = newParent;
    leaf.parent = newParent;

    if (!oldParent) {
      this.root = newParent;
    } else {
      if (oldParent.left === oldSibling) {
        oldParent.left = newParent;
      } else {
        oldParent.right = newParent;
      }
      this.refitAncestors(oldParent);
    }

    return leaf;
  }

  public remove(bodyId: number): void {
    const leaf = this.nodes.get(bodyId);
    if (!leaf) return;
    this.nodes.delete(bodyId);

    if (leaf === this.root) {
      this.root = undefined;
      return;
    }

    const parent = leaf.parent!;
    const sibling = parent.left === leaf ? parent.right! : parent.left!;
    const grandParent = parent.parent;

    sibling.parent = grandParent;
    if (!grandParent) {
      this.root = sibling;
    } else {
      if (grandParent.left === parent) {
        grandParent.left = sibling;
      } else {
        grandParent.right = sibling;
      }
      this.refitAncestors(grandParent);
    }
  }

  public update(bodyId: number, newAABB: AABB2D): void {
    const leaf = this.nodes.get(bodyId);
    if (!leaf) return;
    if (leaf.aabb.containsPoint(newAABB.min) && leaf.aabb.containsPoint(newAABB.max)) {
      return; // Still inside fat AABB bounds
    }
    this.remove(bodyId);
    // Expand bounds with a safety margin (fat AABB)
    const fat = new AABB2D(
      new Vec2(newAABB.min.x - 2, newAABB.min.y - 2),
      new Vec2(newAABB.max.x + 2, newAABB.max.y + 2)
    );
    this.insert(bodyId, fat);
  }

  private refitAncestors(node?: BVHNode): void {
    while (node) {
      const left = node.left!;
      const right = node.right!;
      node.aabb.set(
        Math.min(left.aabb.min.x, right.aabb.min.x),
        Math.min(left.aabb.min.y, right.aabb.min.y),
        Math.max(left.aabb.max.x, right.aabb.max.x),
        Math.max(left.aabb.max.y, right.aabb.max.y)
      );
      node = node.parent;
    }
  }

  public queryOverlaps(aabb: AABB2D, results: number[] = []): number[] {
    if (!this.root) return results;
    const stack: BVHNode[] = [this.root];

    while (stack.length > 0) {
      const node = stack.pop()!;
      if (!node.aabb.intersects(aabb)) continue;

      if (node.isLeaf) {
        results.push(node.bodyId!);
      } else {
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
      }
    }

    return results;
  }
}
