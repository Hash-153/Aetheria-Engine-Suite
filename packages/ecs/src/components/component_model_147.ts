// Archetype Component Data Model #147
import { Vec2, Vec3 } from '../../../math/src/index.js';

export interface ITransformData_147 {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export class TransformNode_147 implements ITransformData_147 {
  public x: number = 1470;
  public y: number = 735;
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

export class RenderNode_147 {
  public visible: boolean = true;
  public alpha: number = 1.0;
  public tint: [number, number, number, number] = [0.725, 0.02, 0.318, 1.0];
  public zOrder: number = 147;

  public setVisibility(val: boolean): void {
    this.visible = val;
  }
}
