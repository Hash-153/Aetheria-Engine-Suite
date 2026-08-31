import { Vec2 } from '../../math/src/index.js';

export interface PointLight2D {
  position: Vec2;
  radius: number;
  color: [number, number, number];
  intensity: number;
}

export class LightingSystem2D {
  public ambientLight: [number, number, number] = [0.08, 0.08, 0.12];
  public pointLights: PointLight2D[] = [];

  public addPointLight(pos: Vec2, radius = 200, color: [number, number, number] = [1, 0.9, 0.6], intensity = 1.0): PointLight2D {
    const light: PointLight2D = {
      position: pos.clone(),
      radius,
      color,
      intensity
    };
    this.pointLights.push(light);
    return light;
  }

  public renderLighting(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    for (let i = 0; i < this.pointLights.length; i++) {
      const light = this.pointLights[i]!;
      const grad = ctx.createRadialGradient(
        light.position.x, light.position.y, 0,
        light.position.x, light.position.y, light.radius
      );

      const r = Math.round(light.color[0] * 255);
      const g = Math.round(light.color[1] * 255);
      const b = Math.round(light.color[2] * 255);

      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${light.intensity * 0.8})`);
      grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${light.intensity * 0.3})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(light.position.x, light.position.y, light.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}
