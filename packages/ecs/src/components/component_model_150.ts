// Archetype Component Data Model #150
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_150 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_150 implements ITransformData_150 {
  public x: number = 1500;
  public y: number = 750;
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

export class RenderNode_150 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.761, 0.102, 0.447, 1.0];
  public zOrder: number = 150;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
