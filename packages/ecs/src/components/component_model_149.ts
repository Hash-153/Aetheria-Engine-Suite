// Archetype Component Data Model #149
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_149 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_149 implements ITransformData_149 {
  public x: number = 1490;
  public y: number = 745;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 5;
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

export class RenderNode_149 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.749, 0.075, 0.404, 1.0];
  public zOrder: number = 149;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
