// Archetype Component Data Model #046
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_46 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_46 implements ITransformData_46 {
  public x: number = 460;
  public y: number = 230;
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

export class RenderNode_46 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.541, 0.259, 0.98, 1.0];
  public zOrder: number = 46;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
