// Archetype Component Data Model #049
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_49 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_49 implements ITransformData_49 {
  public x: number = 490;
  public y: number = 245;
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

export class RenderNode_49 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.576, 0.341, 0.106, 1.0];
  public zOrder: number = 49;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
