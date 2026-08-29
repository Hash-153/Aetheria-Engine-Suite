// Archetype Component Data Model #023
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_23 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_23 implements ITransformData_23 {
  public x: number = 230;
  public y: number = 115;
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

export class RenderNode_23 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.271, 0.631, 0.992, 1.0];
  public zOrder: number = 23;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
