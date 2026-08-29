// Archetype Component Data Model #034
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_34 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_34 implements ITransformData_34 {
  public x: number = 340;
  public y: number = 170;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 2;
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

export class RenderNode_34 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.4, 0.933, 0.463, 1.0];
  public zOrder: number = 34;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
