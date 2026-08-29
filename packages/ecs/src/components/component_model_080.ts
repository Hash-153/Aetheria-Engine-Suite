// Archetype Component Data Model #080
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_80 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_80 implements ITransformData_80 {
  public x: number = 800;
  public y: number = 400;
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

export class RenderNode_80 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.941, 0.188, 0.439, 1.0];
  public zOrder: number = 80;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
