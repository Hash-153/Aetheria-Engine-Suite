// Archetype Component Data Model #123
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_123 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_123 implements ITransformData_123 {
  public x: number = 1230;
  public y: number = 615;
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

export class RenderNode_123 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.443, 0.365, 0.286, 1.0];
  public zOrder: number = 123;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
