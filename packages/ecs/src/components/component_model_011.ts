// Archetype Component Data Model #011
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_11 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_11 implements ITransformData_11 {
  public x: number = 110;
  public y: number = 55;
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

export class RenderNode_11 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.129, 0.302, 0.475, 1.0];
  public zOrder: number = 11;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
