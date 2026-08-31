// Archetype Component Data Model #118
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_118 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_118 implements ITransformData_118 {
  public x: number = 1180;
  public y: number = 590;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 6;
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

export class RenderNode_118 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.384, 0.227, 0.071, 1.0];
  public zOrder: number = 118;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
