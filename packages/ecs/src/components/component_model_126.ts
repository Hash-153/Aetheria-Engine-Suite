// Archetype Component Data Model #126
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_126 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_126 implements ITransformData_126 {
  public x: number = 1260;
  public y: number = 630;
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

export class RenderNode_126 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.478, 0.447, 0.416, 1.0];
  public zOrder: number = 126;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
