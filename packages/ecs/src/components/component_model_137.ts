// Archetype Component Data Model #137
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_137 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_137 implements ITransformData_137 {
  public x: number = 1370;
  public y: number = 685;
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

export class RenderNode_137 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.608, 0.749, 0.89, 1.0];
  public zOrder: number = 137;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
