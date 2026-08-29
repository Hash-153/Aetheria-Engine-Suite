// Archetype Component Data Model #117
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_117 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_117 implements ITransformData_117 {
  public x: number = 1170;
  public y: number = 585;
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

export class RenderNode_117 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.373, 0.2, 0.027, 1.0];
  public zOrder: number = 117;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
