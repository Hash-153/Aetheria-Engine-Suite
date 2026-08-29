// Archetype Component Data Model #100
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_100 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_100 implements ITransformData_100 {
  public x: number = 1000;
  public y: number = 500;
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

export class RenderNode_100 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.173, 0.737, 0.298, 1.0];
  public zOrder: number = 100;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
