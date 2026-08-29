// Archetype Component Data Model #143
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_143 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_143 implements ITransformData_143 {
  public x: number = 1430;
  public y: number = 715;
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

export class RenderNode_143 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.678, 0.914, 0.145, 1.0];
  public zOrder: number = 143;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
