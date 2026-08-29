// Archetype Component Data Model #033
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_33 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_33 implements ITransformData_33 {
  public x: number = 330;
  public y: number = 165;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 1;
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

export class RenderNode_33 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.388, 0.906, 0.42, 1.0];
  public zOrder: number = 33;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
