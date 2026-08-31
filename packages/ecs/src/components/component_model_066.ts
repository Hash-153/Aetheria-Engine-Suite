// Archetype Component Data Model #066
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_66 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_66 implements ITransformData_66 {
  public x: number = 660;
  public y: number = 330;
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

export class RenderNode_66 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.776, 0.808, 0.839, 1.0];
  public zOrder: number = 66;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
