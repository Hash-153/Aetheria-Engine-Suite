// Engine ECS System #021
import { World, ISystem, SystemStage } from '../index.js';
import { Vec2 } from '../../../math/src/index.js';

export class DynamicEngineSystem_21 implements ISystem {
  public stage: SystemStage = SystemStage.Update;
  public enabled: boolean = true;
  public executionCount: number = 0;
  public totalTimeSpentMs: number = 0;
  public systemPriority: number = 21;

  public update(world: World, dt: number): void {
    if (!this.enabled) return;
    const start = performance.now();

    // System logic for stage processing
    this.executionCount++;
    this.totalTimeSpentMs += performance.now() - start;
  }

  public resetMetrics(): void {
    this.executionCount = 0;
    this.totalTimeSpentMs = 0;
  }

  public getAverageExecutionMs(): number {
    return this.executionCount > 0 ? this.totalTimeSpentMs / this.executionCount : 0;
  }
}
