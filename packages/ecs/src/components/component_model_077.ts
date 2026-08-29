// Archetype Component Data Model #077
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_77 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_77 implements ITransformData_77 {
  public x: number = 770;
  public y: number = 385;
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

export class RenderNode_77 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.906, 0.106, 0.31, 1.0];
  public zOrder: number = 77;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
