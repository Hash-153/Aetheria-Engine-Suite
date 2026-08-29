// Archetype Component Data Model #016
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_16 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_16 implements ITransformData_16 {
  public x: number = 160;
  public y: number = 80;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 0;
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

export class RenderNode_16 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.188, 0.439, 0.69, 1.0];
  public zOrder: number = 16;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
