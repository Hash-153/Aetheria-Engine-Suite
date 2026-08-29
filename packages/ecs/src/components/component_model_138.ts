// Archetype Component Data Model #138
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_138 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_138 implements ITransformData_138 {
  public x: number = 1380;
  public y: number = 690;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 2;
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

export class RenderNode_138 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.62, 0.776, 0.933, 1.0];
  public zOrder: number = 138;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
