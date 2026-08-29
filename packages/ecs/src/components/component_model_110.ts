// Archetype Component Data Model #110
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_110 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_110 implements ITransformData_110 {
  public x: number = 1100;
  public y: number = 550;
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

export class RenderNode_110 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.29, 0.008, 0.729, 1.0];
  public zOrder: number = 110;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
