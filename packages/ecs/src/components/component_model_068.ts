// Archetype Component Data Model #068
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_68 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_68 implements ITransformData_68 {
  public x: number = 680;
  public y: number = 340;
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

export class RenderNode_68 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.8, 0.863, 0.925, 1.0];
  public zOrder: number = 68;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
