// Archetype Component Data Model #026
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_26 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_26 implements ITransformData_26 {
  public x: number = 260;
  public y: number = 130;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 2;
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

export class RenderNode_26 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.306, 0.714, 0.118, 1.0];
  public zOrder: number = 26;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
