// Archetype Component Data Model #116
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_116 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_116 implements ITransformData_116 {
  public x: number = 1160;
  public y: number = 580;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 4;
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

export class RenderNode_116 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.361, 0.173, 0.988, 1.0];
  public zOrder: number = 116;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
