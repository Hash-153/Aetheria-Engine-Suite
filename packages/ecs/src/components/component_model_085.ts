// Archetype Component Data Model #085
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_85 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_85 implements ITransformData_85 {
  public x: number = 850;
  public y: number = 425;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 5;
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

export class RenderNode_85 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [1.0, 0.325, 0.655, 1.0];
  public zOrder: number = 85;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
