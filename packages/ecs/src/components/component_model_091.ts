// Archetype Component Data Model #091
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_91 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_91 implements ITransformData_91 {
  public x: number = 910;
  public y: number = 455;
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

export class RenderNode_91 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.067, 0.49, 0.914, 1.0];
  public zOrder: number = 91;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
