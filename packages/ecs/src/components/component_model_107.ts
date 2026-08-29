// Archetype Component Data Model #107
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_107 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_107 implements ITransformData_107 {
  public x: number = 1070;
  public y: number = 535;
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

export class RenderNode_107 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.255, 0.929, 0.6, 1.0];
  public zOrder: number = 107;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
