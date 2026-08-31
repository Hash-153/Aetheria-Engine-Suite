// Archetype Component Data Model #059
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_59 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_59 implements ITransformData_59 {
  public x: number = 590;
  public y: number = 295;
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

export class RenderNode_59 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.694, 0.616, 0.537, 1.0];
  public zOrder: number = 59;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
