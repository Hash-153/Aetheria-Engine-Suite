// Archetype Component Data Model #142
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_142 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_142 implements ITransformData_142 {
  public x: number = 1420;
  public y: number = 710;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 6;
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

export class RenderNode_142 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.667, 0.886, 0.102, 1.0];
  public zOrder: number = 142;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
