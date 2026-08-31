// Archetype Component Data Model #027
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_27 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_27 implements ITransformData_27 {
  public x: number = 270;
  public y: number = 135;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 3;
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

export class RenderNode_27 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.318, 0.741, 0.161, 1.0];
  public zOrder: number = 27;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
