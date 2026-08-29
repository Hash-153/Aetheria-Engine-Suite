// Archetype Component Data Model #088
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_88 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_88 implements ITransformData_88 {
  public x: number = 880;
  public y: number = 440;
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

export class RenderNode_88 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.031, 0.408, 0.784, 1.0];
  public zOrder: number = 88;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
