// Archetype Component Data Model #064
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_64 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_64 implements ITransformData_64 {
  public x: number = 640;
  public y: number = 320;
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

export class RenderNode_64 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.753, 0.753, 0.753, 1.0];
  public zOrder: number = 64;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
