// Archetype Component Data Model #031
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_31 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_31 implements ITransformData_31 {
  public x: number = 310;
  public y: number = 155;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 7;
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

export class RenderNode_31 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.365, 0.851, 0.333, 1.0];
  public zOrder: number = 31;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
