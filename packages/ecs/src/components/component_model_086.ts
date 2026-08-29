// Archetype Component Data Model #086
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_86 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_86 implements ITransformData_86 {
  public x: number = 860;
  public y: number = 430;
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

export class RenderNode_86 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.008, 0.353, 0.698, 1.0];
  public zOrder: number = 86;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
