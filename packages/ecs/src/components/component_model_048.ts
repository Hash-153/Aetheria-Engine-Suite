// Archetype Component Data Model #048
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_48 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_48 implements ITransformData_48 {
  public x: number = 480;
  public y: number = 240;
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

export class RenderNode_48 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.565, 0.314, 0.063, 1.0];
  public zOrder: number = 48;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
