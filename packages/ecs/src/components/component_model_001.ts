// Archetype Component Data Model #001
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_1 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_1 implements ITransformData_1 {
  public x: number = 10;
  public y: number = 5;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 1;
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

export class RenderNode_1 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.012, 0.027, 0.043, 1.0];
  public zOrder: number = 1;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
