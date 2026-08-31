// Archetype Component Data Model #020
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_20 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_20 implements ITransformData_20 {
  public x: number = 200;
  public y: number = 100;
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

export class RenderNode_20 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.235, 0.549, 0.863, 1.0];
  public zOrder: number = 20;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
