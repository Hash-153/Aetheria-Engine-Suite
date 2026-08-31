// Archetype Component Data Model #084
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_84 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_84 implements ITransformData_84 {
  public x: number = 840;
  public y: number = 420;
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

export class RenderNode_84 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.988, 0.298, 0.612, 1.0];
  public zOrder: number = 84;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
