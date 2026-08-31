import { EntityId } from './entity.js';

export interface IComponentStorage<T> {
  set(entity: EntityId, data: T): void;
  get(entity: EntityId): T | undefined;
  has(entity: EntityId): boolean;
  remove(entity: EntityId): boolean;
  clear(): void;
  keys(): IterableIterator<EntityId>;
}

export class SparseSetStorage<T> implements IComponentStorage<T> {
  private sparse: number[] = [];
  private dense: EntityId[] = [];
  private instances: T[] = [];

  public set(entity: EntityId, data: T): void {
    const idx = this.sparse[entity];
    if (idx !== undefined && idx < this.dense.length && this.dense[idx] === entity) {
      this.instances[idx] = data;
      return;
    }
    const denseIdx = this.dense.length;
    this.sparse[entity] = denseIdx;
    this.dense.push(entity);
    this.instances.push(data);
  }

  public get(entity: EntityId): T | undefined {
    const idx = this.sparse[entity];
    if (idx !== undefined && idx < this.dense.length && this.dense[idx] === entity) {
      return this.instances[idx];
    }
    return undefined;
  }

  public has(entity: EntityId): boolean {
    const idx = this.sparse[entity];
    return idx !== undefined && idx < this.dense.length && this.dense[idx] === entity;
  }

  public remove(entity: EntityId): boolean {
    const idx = this.sparse[entity];
    if (idx === undefined || idx >= this.dense.length || this.dense[idx] !== entity) {
      return false;
    }

    const lastIdx = this.dense.length - 1;
    const lastEntity = this.dense[lastIdx]!;

    this.dense[idx] = lastEntity;
    this.instances[idx] = this.instances[lastIdx]!;
    this.sparse[lastEntity] = idx;

    this.dense.pop();
    this.instances.pop();
    delete this.sparse[entity];
    return true;
  }

  public clear(): void {
    this.sparse.length = 0;
    this.dense.length = 0;
    this.instances.length = 0;
  }

  public *keys(): IterableIterator<EntityId> {
    for (let i = 0; i < this.dense.length; i++) {
      yield this.dense[i]!;
    }
  }

  public get size(): number {
    return this.dense.length;
  }
}
