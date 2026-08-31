// Archetype Component Data Model #114
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_114 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_114 implements ITransformData_114 {
  public x: number = 1140;
  public y: number = 570;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 2;
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

export class RenderNode_114 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.337, 0.118, 0.902, 1.0];
  public zOrder: number = 114;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
