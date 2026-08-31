// Archetype Component Data Model #056
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_56 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_56 implements ITransformData_56 {
  public x: number = 560;
  public y: number = 280;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 0;
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

export class RenderNode_56 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.659, 0.533, 0.408, 1.0];
  public zOrder: number = 56;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
