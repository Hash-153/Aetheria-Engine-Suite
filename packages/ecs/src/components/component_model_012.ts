// Archetype Component Data Model #012
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_12 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_12 implements ITransformData_12 {
  public x: number = 120;
  public y: number = 60;
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

export class RenderNode_12 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.141, 0.329, 0.518, 1.0];
  public zOrder: number = 12;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
