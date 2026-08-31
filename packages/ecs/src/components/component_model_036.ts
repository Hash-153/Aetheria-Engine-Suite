// Archetype Component Data Model #036
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_36 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_36 implements ITransformData_36 {
  public x: number = 360;
  public y: number = 180;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 4;
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

export class RenderNode_36 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.424, 0.988, 0.549, 1.0];
  public zOrder: number = 36;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
