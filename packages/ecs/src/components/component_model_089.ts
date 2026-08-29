// Archetype Component Data Model #089
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_89 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_89 implements ITransformData_89 {
  public x: number = 890;
  public y: number = 445;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 1;
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

export class RenderNode_89 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.043, 0.435, 0.827, 1.0];
  public zOrder: number = 89;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
