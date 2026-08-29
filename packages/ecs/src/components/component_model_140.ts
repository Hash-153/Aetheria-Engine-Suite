// Archetype Component Data Model #140
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_140 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_140 implements ITransformData_140 {
  public x: number = 1400;
  public y: number = 700;
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

export class RenderNode_140 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.643, 0.831, 0.016, 1.0];
  public zOrder: number = 140;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
