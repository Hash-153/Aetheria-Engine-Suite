// Archetype Component Data Model #021
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_21 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_21 implements ITransformData_21 {
  public x: number = 210;
  public y: number = 105;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 5;
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

export class RenderNode_21 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.247, 0.576, 0.906, 1.0];
  public zOrder: number = 21;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
