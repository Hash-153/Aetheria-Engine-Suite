// Archetype Component Data Model #083
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_83 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_83 implements ITransformData_83 {
  public x: number = 830;
  public y: number = 415;
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

export class RenderNode_83 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.976, 0.271, 0.569, 1.0];
  public zOrder: number = 83;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
