// Archetype Component Data Model #069
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_69 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_69 implements ITransformData_69 {
  public x: number = 690;
  public y: number = 345;
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

export class RenderNode_69 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.812, 0.89, 0.969, 1.0];
  public zOrder: number = 69;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
