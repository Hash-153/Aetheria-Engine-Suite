// Archetype Component Data Model #067
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_67 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_67 implements ITransformData_67 {
  public x: number = 670;
  public y: number = 335;
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

export class RenderNode_67 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.788, 0.835, 0.882, 1.0];
  public zOrder: number = 67;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
