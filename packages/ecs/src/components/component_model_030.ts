// Archetype Component Data Model #030
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_30 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_30 implements ITransformData_30 {
  public x: number = 300;
  public y: number = 150;
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

export class RenderNode_30 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.353, 0.824, 0.29, 1.0];
  public zOrder: number = 30;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
