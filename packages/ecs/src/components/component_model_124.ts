// Archetype Component Data Model #124
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_124 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_124 implements ITransformData_124 {
  public x: number = 1240;
  public y: number = 620;
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

export class RenderNode_124 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.455, 0.392, 0.329, 1.0];
  public zOrder: number = 124;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
