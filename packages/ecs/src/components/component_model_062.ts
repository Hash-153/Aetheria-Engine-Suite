// Archetype Component Data Model #062
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_62 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_62 implements ITransformData_62 {
  public x: number = 620;
  public y: number = 310;
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

export class RenderNode_62 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.729, 0.698, 0.667, 1.0];
  public zOrder: number = 62;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
