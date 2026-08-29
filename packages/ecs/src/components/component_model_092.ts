// Archetype Component Data Model #092
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_92 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_92 implements ITransformData_92 {
  public x: number = 920;
  public y: number = 460;
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

export class RenderNode_92 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.078, 0.518, 0.957, 1.0];
  public zOrder: number = 92;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
