import { Vec2 } from '../../../packages/math/src/index.js';
import { RenderContext, SpriteBatch2D, Camera2D, ParticleEmitter2D } from '../../../packages/renderer/src/index.js';
import { ProceduralAudioEngine } from '../../../packages/audio/src/index.js';
import { InputManager } from '../../../packages/ui/src/index.js';

export class CyberRunnerGame {
  private canvas: HTMLCanvasElement;
  private ctx: RenderContext;
  private batch: SpriteBatch2D;
  private camera: Camera2D;
  private particles: ParticleEmitter2D;
  private audio: ProceduralAudioEngine;
  private input: InputManager;

  public playerPos: Vec2 = new Vec2(100, 300);
  public playerVel: Vec2 = new Vec2();
  public isGrounded = false;
  public canDash = true;
  public score = 0;

  public platforms = [
    { x: 50, y: 450, w: 700, h: 40 },
    { x: 200, y: 350, w: 120, h: 20 },
    { x: 380, y: 270, w: 140, h: 20 },
    { x: 580, y: 200, w: 150, h: 20 },
    { x: 250, y: 150, w: 100, h: 20 }
  ];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = new RenderContext(canvas, false);
    this.batch = new SpriteBatch2D(this.ctx);
    this.camera = new Camera2D();
    this.particles = new ParticleEmitter2D();
    this.audio = new ProceduralAudioEngine();
    this.input = new InputManager();
  }

  public update(dt: number): void {
    const moveX = (this.input.isKeyDown('KeyD') || this.input.isKeyDown('ArrowRight') ? 1 : 0) -
                  (this.input.isKeyDown('KeyA') || this.input.isKeyDown('ArrowLeft') ? 1 : 0);

    // Horizontal speed
    this.playerVel.x = moveX * 240;

    // Gravity
    this.playerVel.y += 900 * dt;

    // Jump
    if ((this.input.isKeyDown('KeyW') || this.input.isKeyDown('Space')) && this.isGrounded) {
      this.playerVel.y = -420;
      this.isGrounded = false;
      this.audio.playJump();
      this.particles.emit(this.playerPos, 8, 80, [0.2, 0.9, 1, 1]);
    }

    // Dash
    if (this.input.isKeyDown('ShiftLeft') && this.canDash && moveX !== 0) {
      this.playerVel.x = moveX * 600;
      this.canDash = false;
      this.audio.playLaser();
      this.particles.emit(this.playerPos, 12, 100, [1, 0.4, 0.8, 1]);
      setTimeout(() => { this.canDash = true; }, 800);
    }

    // Integrate
    this.playerPos.x += this.playerVel.x * dt;
    this.playerPos.y += this.playerVel.y * dt;

    // Platform collisions
    this.isGrounded = false;
    for (let i = 0; i < this.platforms.length; i++) {
      const p = this.platforms[i]!;
      if (
        this.playerPos.x + 12 > p.x &&
        this.playerPos.x - 12 < p.x + p.w &&
        this.playerPos.y + 16 >= p.y &&
        this.playerPos.y + 16 <= p.y + p.h &&
        this.playerVel.y >= 0
      ) {
        this.playerPos.y = p.y - 16;
        this.playerVel.y = 0;
        this.isGrounded = true;
      }
    }

    this.particles.update(dt);
    this.input.update();
  }

  public render(): void {
    this.ctx.clear(0.07, 0.05, 0.12, 1);
    if (this.ctx.ctx2d) {
      const ctx = this.ctx.ctx2d;

      // Draw Platforms
      ctx.fillStyle = '#2c3e50';
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 2;
      for (let i = 0; i < this.platforms.length; i++) {
        const p = this.platforms[i]!;
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.strokeRect(p.x, p.y, p.w, p.h);
      }

      // Draw Player
      ctx.fillStyle = '#e056fd';
      ctx.fillRect(this.playerPos.x - 12, this.playerPos.y - 16, 24, 32);

      this.particles.render(this.batch);

      // HUD
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px monospace';
      ctx.fillText("CYBER RUNNER - METROIDVANIA PLATFORMER", 20, 30);
      ctx.font = '13px monospace';
      ctx.fillText("A/D: Move | W/Space: Jump | Shift: Cyber Dash", 20, 50);
    }
  }
}
