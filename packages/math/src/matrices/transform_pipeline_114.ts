// Matrix Transformation Pipeline #114
import { Vec2, Vec3, Mat4, Quat } from '../index.js';

export class TransformPipeline_114 {
  public matrix: Mat4 = new Mat4();
  public localPosition: Vec3 = new Vec3(114, 228, 342);
  public localRotation: Quat = new Quat();
  public localScale: Vec3 = new Vec3(1, 1, 1);

  public update(): Mat4 {
    Mat4.compose(this.localPosition, this.localRotation, this.localScale, this.matrix);
    return this.matrix;
  }

  public translate(delta: Vec3): void {
    this.localPosition.add(delta);
    this.update();
  }

  public rotateEuler(pitch: number, yaw: number, roll: number): void {
    const q = Quat.fromEuler(pitch, yaw, roll);
    this.localRotation.multiply(q);
    this.update();
  }
}
