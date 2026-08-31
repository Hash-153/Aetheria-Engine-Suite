// Archetype Component Data Model #115
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_115 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_115 implements ITransformData_115 {
  public x: number = 1150;
  public y: number = 575;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 3;
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

export class RenderNode_115 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.349, 0.145, 0.945, 1.0];
  public zOrder: number = 115;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
