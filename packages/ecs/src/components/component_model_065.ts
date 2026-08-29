// Archetype Component Data Model #065
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_65 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_65 implements ITransformData_65 {
  public x: number = 650;
  public y: number = 325;
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

export class RenderNode_65 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.765, 0.78, 0.796, 1.0];
  public zOrder: number = 65;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
