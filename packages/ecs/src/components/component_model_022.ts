// Archetype Component Data Model #022
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_22 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_22 implements ITransformData_22 {
  public x: number = 220;
  public y: number = 110;
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

export class RenderNode_22 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.259, 0.604, 0.949, 1.0];
  public zOrder: number = 22;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
