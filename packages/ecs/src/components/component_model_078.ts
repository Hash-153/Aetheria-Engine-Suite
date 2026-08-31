// Archetype Component Data Model #078
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_78 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_78 implements ITransformData_78 {
  public x: number = 780;
  public y: number = 390;
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

export class RenderNode_78 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.918, 0.133, 0.353, 1.0];
  public zOrder: number = 78;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
