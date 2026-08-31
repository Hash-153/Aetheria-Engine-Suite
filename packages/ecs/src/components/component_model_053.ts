// Archetype Component Data Model #053
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_53 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_53 implements ITransformData_53 {
  public x: number = 530;
  public y: number = 265;
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

export class RenderNode_53 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.624, 0.451, 0.278, 1.0];
  public zOrder: number = 53;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
