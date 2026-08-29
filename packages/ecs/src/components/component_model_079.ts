// Archetype Component Data Model #079
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_79 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_79 implements ITransformData_79 {
  public x: number = 790;
  public y: number = 395;
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

export class RenderNode_79 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.929, 0.161, 0.396, 1.0];
  public zOrder: number = 79;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
