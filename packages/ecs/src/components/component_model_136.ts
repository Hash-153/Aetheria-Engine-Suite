// Archetype Component Data Model #136
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_136 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_136 implements ITransformData_136 {
  public x: number = 1360;
  public y: number = 680;
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

export class RenderNode_136 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.596, 0.722, 0.847, 1.0];
  public zOrder: number = 136;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
