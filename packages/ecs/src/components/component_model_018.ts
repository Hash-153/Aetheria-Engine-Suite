// Archetype Component Data Model #018
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_18 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_18 implements ITransformData_18 {
  public x: number = 180;
  public y: number = 90;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 2;
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

export class RenderNode_18 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.212, 0.494, 0.776, 1.0];
  public zOrder: number = 18;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
