// Archetype Component Data Model #035
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_35 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_35 implements ITransformData_35 {
  public x: number = 350;
  public y: number = 175;
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

export class RenderNode_35 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.412, 0.961, 0.506, 1.0];
  public zOrder: number = 35;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
