export type EntityId = number;

export class EntityManager {
  private nextId = 1;
  private recycledIds: EntityId[] = [];
  private activeEntities = new Set<EntityId>();

  public create(): EntityId {
    const id = this.recycledIds.length > 0 ? this.recycledIds.pop()! : this.nextId++;
    this.activeEntities.add(id);
    return id;
  }

  public destroy(id: EntityId): boolean {
    if (!this.activeEntities.has(id)) return false;
    this.activeEntities.delete(id);
    this.recycledIds.push(id);
    return true;
  }

  public isAlive(id: EntityId): boolean {
    return this.activeEntities.has(id);
  }

  public get count(): number {
    return this.activeEntities.size;
  }

  public clear(): void {
    this.activeEntities.clear();
    this.recycledIds.length = 0;
    this.nextId = 1;
  }
}
