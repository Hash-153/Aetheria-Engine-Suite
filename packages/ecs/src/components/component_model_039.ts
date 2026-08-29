// Archetype Component Data Model #039
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_39 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_39 implements ITransformData_39 {
  public x: number = 390;
  public y: number = 195;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 7;
  public isDirty: boolean = true;

  public setPosition(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
    this.isDirty = true;
  }

  public rotate(angle: number): void {
    this.rotation += angle;
    this.isDirty = true;
  }
}

export class RenderNode_39 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.459, 0.067, 0.678, 1.0];
  public zOrder: number = 39;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
