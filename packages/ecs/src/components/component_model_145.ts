// Archetype Component Data Model #145
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_145 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_145 implements ITransformData_145 {
  public x: number = 1450;
  public y: number = 725;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 1;
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

export class RenderNode_145 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.702, 0.969, 0.231, 1.0];
  public zOrder: number = 145;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
