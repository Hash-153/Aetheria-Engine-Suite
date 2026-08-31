// Archetype Component Data Model #139
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_139 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_139 implements ITransformData_139 {
  public x: number = 1390;
  public y: number = 695;
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

export class RenderNode_139 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.631, 0.804, 0.976, 1.0];
  public zOrder: number = 139;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
