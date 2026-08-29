import { World } from './world.js';

export enum SystemStage {
  PreUpdate = 0,
  FixedUpdate = 1,
  Update = 2,
  PostUpdate = 3,
  Render = 4,
  PostRender = 5
}

export interface ISystem {
  stage?: SystemStage;
  enabled?: boolean;
  update(world: World, dt: number): void;
}

export class SystemScheduler {
  private stages: Map<SystemStage, ISystem[]> = new Map();

  constructor() {
    for (let stage = SystemStage.PreUpdate; stage <= SystemStage.PostRender; stage++) {
      this.stages.set(stage, []);
    }
  }

  public add(system: ISystem, stage = SystemStage.Update): this {
    system.stage = stage;
    if (system.enabled === undefined) system.enabled = true;
    this.stages.get(stage)?.push(system);
    return this;
  }

  public runStage(stage: SystemStage, world: World, dt: number): void {
    const list = this.stages.get(stage);
    if (!list) return;
    for (let i = 0; i < list.length; i++) {
      const sys = list[i]!;
      if (sys.enabled !== false) {
        sys.update(world, dt);
      }
    }
  }

  public runAll(world: World, dt: number): void {
    for (let stage = SystemStage.PreUpdate; stage <= SystemStage.PostRender; stage++) {
      this.runStage(stage, world, dt);
    }
  }
}
