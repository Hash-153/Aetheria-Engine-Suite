// Archetype Component Data Model #044
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_44 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_44 implements ITransformData_44 {
  public x: number = 440;
  public y: number = 220;
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

export class RenderNode_44 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.518, 0.204, 0.894, 1.0];
  public zOrder: number = 44;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
