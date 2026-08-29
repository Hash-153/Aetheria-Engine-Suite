// Archetype Component Data Model #097
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_97 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_97 implements ITransformData_97 {
  public x: number = 970;
  public y: number = 485;
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

export class RenderNode_97 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.137, 0.655, 0.169, 1.0];
  public zOrder: number = 97;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
