// Archetype Component Data Model #119
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_119 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_119 implements ITransformData_119 {
  public x: number = 1190;
  public y: number = 595;
  public rotation: number = 0.0;
  public scaleX: number = 1.0;
  public scaleY: number = 1.0;
  public layerIndex: number = 7;
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

export class RenderNode_119 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.396, 0.255, 0.114, 1.0];
  public zOrder: number = 119;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
