import { EntityId, EntityManager } from './entity.js';
import { ComponentType, ComponentRegistry } from './component.js';
import { IComponentStorage, SparseSetStorage } from './storage.js';
import { ISystem, SystemScheduler, SystemStage } from './system.js';

export class World {
  public readonly entities = new EntityManager();
  private storages = new Map<number, IComponentStorage<any>>();
  public readonly scheduler = new SystemScheduler();

  public getStorage<T>(type: ComponentType<T>): IComponentStorage<T> {
    const typeId = ComponentRegistry.getTypeId(type);
    let storage = this.storages.get(typeId);
    if (!storage) {
      storage = new SparseSetStorage<T>();
      this.storages.set(typeId, storage);
    }
    return storage;
  }

  public createEntity(): EntityId {
    return this.entities.create();
  }

  public destroyEntity(entity: EntityId): void {
    for (const storage of this.storages.values()) {
      storage.remove(entity);
    }
    this.entities.destroy(entity);
  }

  public addComponent<T>(entity: EntityId, type: ComponentType<T>, component: T): this {
    this.getStorage(type).set(entity, component);
    return this;
  }

  public getComponent<T>(entity: EntityId, type: ComponentType<T>): T | undefined {
    return this.getStorage(type).get(entity);
  }

  public hasComponent<T>(entity: EntityId, type: ComponentType<T>): boolean {
    return this.getStorage(type).has(entity);
  }

  public removeComponent<T>(entity: EntityId, type: ComponentType<T>): boolean {
    return this.getStorage(type).remove(entity);
  }

  public *query(...types: ComponentType[]): IterableIterator<EntityId> {
    if (types.length === 0) return;
    const storages = types.map(t => this.getStorage(t));
    let minStorage = storages[0]!;
    for (let i = 1; i < storages.length; i++) {
      if ((storages[i] as any).size < (minStorage as any).size) {
        minStorage = storages[i]!;
      }
    }

    for (const entity of minStorage.keys()) {
      let match = true;
      for (let i = 0; i < storages.length; i++) {
        if (!storages[i]!.has(entity)) {
          match = false;
          break;
        }
      }
      if (match) yield entity;
    }
  }

  public addSystem(system: ISystem, stage = SystemStage.Update): this {
    this.scheduler.add(system, stage);
    return this;
  }

  public update(dt: number): void {
    this.scheduler.runAll(this, dt);
  }
}
