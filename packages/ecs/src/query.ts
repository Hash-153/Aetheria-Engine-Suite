import { EntityId } from './entity.js';
import { ComponentType } from './component.js';
import { World } from './world.js';

export interface QueryFilter {
  all?: ComponentType[];
  any?: ComponentType[];
  none?: ComponentType[];
}

export class Query {
  private filter: QueryFilter;

  constructor(filter: QueryFilter) {
    this.filter = filter;
  }

  public *execute(world: World): IterableIterator<EntityId> {
    const all = this.filter.all ?? [];
    const any = this.filter.any ?? [];
    const none = this.filter.none ?? [];

    if (all.length === 0 && any.length === 0) return;

    const baseCandidates = all.length > 0 ? world.query(...all) : world.query(any[0]!);

    for (const entity of baseCandidates) {
      let match = true;

      if (any.length > 0) {
        let hasAny = false;
        for (const type of any) {
          if (world.hasComponent(entity, type)) {
            hasAny = true;
            break;
          }
        }
        if (!hasAny) match = false;
      }

      if (match && none.length > 0) {
        for (const type of none) {
          if (world.hasComponent(entity, type)) {
            match = false;
            break;
          }
        }
      }

      if (match) yield entity;
    }
  }
}
