// Archetype Component Data Model #015
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_15 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_15 implements ITransformData_15 {
  public x: number = 150;
  public y: number = 75;
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

export class RenderNode_15 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.176, 0.412, 0.647, 1.0];
  public zOrder: number = 15;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
