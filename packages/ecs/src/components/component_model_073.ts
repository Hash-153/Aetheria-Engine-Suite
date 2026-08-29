// Archetype Component Data Model #073
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_73 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_73 implements ITransformData_73 {
  public x: number = 730;
  public y: number = 365;
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

export class RenderNode_73 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.859, 1.0, 0.137, 1.0];
  public zOrder: number = 73;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
