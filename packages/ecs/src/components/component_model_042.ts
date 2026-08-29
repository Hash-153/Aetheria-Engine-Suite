// Archetype Component Data Model #042
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_42 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_42 implements ITransformData_42 {
  public x: number = 420;
  public y: number = 210;
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

export class RenderNode_42 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.494, 0.149, 0.808, 1.0];
  public zOrder: number = 42;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
