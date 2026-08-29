// Archetype Component Data Model #028
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_28 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_28 implements ITransformData_28 {
  public x: number = 280;
  public y: number = 140;
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

export class RenderNode_28 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.329, 0.769, 0.204, 1.0];
  public zOrder: number = 28;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
