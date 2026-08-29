// Archetype Component Data Model #094
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_94 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_94 implements ITransformData_94 {
  public x: number = 940;
  public y: number = 470;
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

export class RenderNode_94 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.102, 0.573, 0.039, 1.0];
  public zOrder: number = 94;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
