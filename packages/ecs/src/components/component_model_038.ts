// Archetype Component Data Model #038
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_38 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_38 implements ITransformData_38 {
  public x: number = 380;
  public y: number = 190;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 6;
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

export class RenderNode_38 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.447, 0.039, 0.635, 1.0];
  public zOrder: number = 38;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
