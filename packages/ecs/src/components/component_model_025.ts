// Archetype Component Data Model #025
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_25 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_25 implements ITransformData_25 {
  public x: number = 250;
  public y: number = 125;
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

export class RenderNode_25 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.294, 0.686, 0.075, 1.0];
  public zOrder: number = 25;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
