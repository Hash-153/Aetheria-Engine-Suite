// Archetype Component Data Model #017
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_17 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_17 implements ITransformData_17 {
  public x: number = 170;
  public y: number = 85;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 1;
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

export class RenderNode_17 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.2, 0.467, 0.733, 1.0];
  public zOrder: number = 17;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
