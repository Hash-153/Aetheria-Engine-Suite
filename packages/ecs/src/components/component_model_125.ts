// Archetype Component Data Model #125
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_125 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_125 implements ITransformData_125 {
  public x: number = 1250;
  public y: number = 625;
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

export class RenderNode_125 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.467, 0.42, 0.373, 1.0];
  public zOrder: number = 125;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
