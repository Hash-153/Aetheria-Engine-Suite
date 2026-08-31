import { Vec2 } from '../../math/src/index.js';

export class Camera2D {
  public position: Vec2 = new Vec2();
  public target: Vec2 = new Vec2();
  public zoom: number = 1.0;
  public targetZoom: number = 1.0;
  public viewportWidth: number = 800;
  public viewportHeight: number = 600;

  public lerpSpeed: number = 0.1;
  public shakeDuration: number = 0;
  public shakeIntensity: number = 0;

  public update(dt: number): void {
    // Smooth camera tracking
    this.position.x += (this.target.x - this.position.x) * this.lerpSpeed;
    this.position.y += (this.target.y - this.position.y) * this.lerpSpeed;
    this.zoom += (this.targetZoom - this.zoom) * this.lerpSpeed;

    // Screen shake decay
    if (this.shakeDuration > 0) {
      this.shakeDuration -= dt;
      if (this.shakeDuration <= 0) {
        this.shakeIntensity = 0;
      }
    }
  }

  public shake(intensity: number, duration: number): void {
    this.shakeIntensity = intensity;
    this.shakeDuration = duration;
  }

  public getOffset(): Vec2 {
    let sx = 0;
    let sy = 0;
    if (this.shakeIntensity > 0) {
      sx = (Math.random() * 2 - 1) * this.shakeIntensity;
      sy = (Math.random() * 2 - 1) * this.shakeIntensity;
    }

    return new Vec2(
      this.viewportWidth * 0.5 - this.position.x * this.zoom + sx,
      this.viewportHeight * 0.5 - this.position.y * this.zoom + sy
    );
  }

  public screenToWorld(screenX: number, screenY: number, out = new Vec2()): Vec2 {
    const offset = this.getOffset();
    return out.set(
      (screenX - offset.x) / this.zoom,
      (screenY - offset.y) / this.zoom
    );
  }
}
