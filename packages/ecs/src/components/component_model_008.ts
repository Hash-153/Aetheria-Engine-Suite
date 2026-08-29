// Archetype Component Data Model #008
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_8 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_8 implements ITransformData_8 {
  public x: number = 80;
  public y: number = 40;
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

export class RenderNode_8 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.094, 0.22, 0.345, 1.0];
  public zOrder: number = 8;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
