// Archetype Component Data Model #099
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_99 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_99 implements ITransformData_99 {
  public x: number = 990;
  public y: number = 495;
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

export class RenderNode_99 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.161, 0.71, 0.255, 1.0];
  public zOrder: number = 99;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
