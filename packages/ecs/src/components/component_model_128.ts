// Archetype Component Data Model #128
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_128 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_128 implements ITransformData_128 {
  public x: number = 1280;
  public y: number = 640;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 0;
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

export class RenderNode_128 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.502, 0.502, 0.502, 1.0];
  public zOrder: number = 128;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
