// Archetype Component Data Model #071
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_71 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_71 implements ITransformData_71 {
  public x: number = 710;
  public y: number = 355;
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

export class RenderNode_71 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.835, 0.945, 0.051, 1.0];
  public zOrder: number = 71;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
