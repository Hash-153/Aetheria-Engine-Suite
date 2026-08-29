// Archetype Component Data Model #051
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_51 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_51 implements ITransformData_51 {
  public x: number = 510;
  public y: number = 255;
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

export class RenderNode_51 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.6, 0.396, 0.192, 1.0];
  public zOrder: number = 51;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
