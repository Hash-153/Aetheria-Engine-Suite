// Archetype Component Data Model #148
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_148 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_148 implements ITransformData_148 {
  public x: number = 1480;
  public y: number = 740;
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

export class RenderNode_148 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.737, 0.047, 0.361, 1.0];
  public zOrder: number = 148;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
