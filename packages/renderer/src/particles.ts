import { Vec2 } from '../../math/src/index.js';
import { SpriteBatch2D } from './batch-2d.js';

export interface Particle {
  position: Vec2;
  velocity: Vec2;
  color: [number, number, number, number];
  size: number;
  lifetime: number;
  maxLifetime: number;
}

export class ParticleEmitter2D {
  private particles: Particle[] = [];

  public emit(
    pos: Vec2,
    count = 10,
    speed = 100,
    color: [number, number, number, number] = [1, 0.8, 0.2, 1],
    lifetime = 0.8,
    size = 4
  ): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = speed * (0.5 + Math.random() * 0.8);
      this.particles.push({
        position: pos.clone(),
        velocity: new Vec2(Math.cos(angle) * spd, Math.sin(angle) * spd),
        color: [...color],
        size: size * (0.8 + Math.random() * 0.5),
        lifetime,
        maxLifetime: lifetime
      });
    }
  }

  public update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]!;
      p.lifetime -= dt;
      if (p.lifetime <= 0) {
        this.particles.splice(i, 1);
        continue;
      }
      p.position.x += p.velocity.x * dt;
      p.position.y += p.velocity.y * dt;
      p.velocity.scale(0.96); // drag
    }
  }

  public render(batch: SpriteBatch2D): void {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i]!;
      const alpha = (p.lifetime / p.maxLifetime) * p.color[3]!;
      batch.drawCircle(
        p.position.x, p.position.y,
        p.size * (p.lifetime / p.maxLifetime),
        p.color[0], p.color[1], p.color[2], alpha
      );
    }
  }

  public get count(): number {
    return this.particles.length;
  }
}
