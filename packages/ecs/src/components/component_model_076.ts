// Archetype Component Data Model #076
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_76 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_76 implements ITransformData_76 {
  public x: number = 760;
  public y: number = 380;
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

export class RenderNode_76 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.894, 0.078, 0.267, 1.0];
  public zOrder: number = 76;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
