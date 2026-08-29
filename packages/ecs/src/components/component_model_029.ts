// Archetype Component Data Model #029
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_29 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_29 implements ITransformData_29 {
  public x: number = 290;
  public y: number = 145;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 5;
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

export class RenderNode_29 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.341, 0.796, 0.247, 1.0];
  public zOrder: number = 29;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
