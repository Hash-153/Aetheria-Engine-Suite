// Archetype Component Data Model #052
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_52 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_52 implements ITransformData_52 {
  public x: number = 520;
  public y: number = 260;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 4;
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

export class RenderNode_52 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.612, 0.424, 0.235, 1.0];
  public zOrder: number = 52;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
