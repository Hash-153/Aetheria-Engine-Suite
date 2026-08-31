// Archetype Component Data Model #019
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_19 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_19 implements ITransformData_19 {
  public x: number = 190;
  public y: number = 95;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 3;
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

export class RenderNode_19 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.224, 0.522, 0.82, 1.0];
  public zOrder: number = 19;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
