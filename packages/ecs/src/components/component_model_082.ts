// Archetype Component Data Model #082
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_82 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_82 implements ITransformData_82 {
  public x: number = 820;
  public y: number = 410;
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

export class RenderNode_82 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.965, 0.243, 0.525, 1.0];
  public zOrder: number = 82;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
