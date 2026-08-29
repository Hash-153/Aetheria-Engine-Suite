import { Vec2 } from '../../../packages/math/src/index.js';
import { RenderContext, SpriteBatch2D, Camera2D, ParticleEmitter2D } from '../../../packages/renderer/src/index.js';
import { ProceduralAudioEngine } from '../../../packages/audio/src/index.js';
import { InputManager } from '../../../packages/ui/src/index.js';

export interface PlatformPlayer {
  pos: Vec2;
  velocity: Vec2;
  isGrounded: boolean;
  coyoteTimer: number;
  canDash: boolean;
  score: number;
}

export class CyberRunnerGame {
  private canvas: HTMLCanvasElement;
  private ctx: RenderContext;
  private batch: SpriteBatch2D;
  private camera: Camera2D;
  private particles: ParticleEmitter2D;
  private audio: ProceduralAudioEngine;
  private input: InputManager;

  public player: PlatformPlayer;
  public platforms: Array<{ x: number; y: number; w: number; h: number }> = [];
  public goalPos = new Vec2(350, 110);
  public isGameOver = false;
  public isVictory = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = new RenderContext(canvas, false);
    this.batch = new SpriteBatch2D(this.ctx);
    this.camera = new Camera2D();
    this.particles = new ParticleEmitter2D();
    this.audio = new ProceduralAudioEngine();
    this.input = new InputManager();

    this.player = {
      pos: new Vec2(100, 480),
      velocity: new Vec2(),
      isGrounded: false,
      coyoteTimer: 0,
      canDash: true,
      score: 0
    };

    this.initWorld();
  }

  public initWorld(): void {
    this.isVictory = false;
    this.isGameOver = false;
    this.player.pos.set(100, 480);
    this.player.velocity.set(0, 0);

    this.platforms = [
      { x: 50, y: 520, w: 700, h: 40 },
      { x: 150, y: 420, w: 180, h: 20 },
      { x: 420, y: 340, w: 200, h: 20 },
      { x: 220, y: 240, w: 160, h: 20 },
      { x: 480, y: 160, w: 180, h: 20 },
      { x: 300, y: 140, w: 120, h: 20 }
    ];
  }

  public update(dt: number): void {
    if (this.isVictory || this.isGameOver) {
      if (this.input.isKeyDown('KeyR') || this.input.isKeyDown('Enter') || this.input.isMouseJustPressed) {
        this.initWorld();
        return;
      }
      return;
    }

    // Horizontal movement
    let moveX = 0;
    if (this.input.isKeyDown('KeyA') || this.input.isKeyDown('ArrowLeft')) moveX -= 1;
    if (this.input.isKeyDown('KeyD') || this.input.isKeyDown('ArrowRight')) moveX += 1;

    this.player.velocity.x = moveX * 240;

    // Gravity
    this.player.velocity.y += 980 * dt;

    // Jump
    if (this.player.isGrounded) {
      this.player.coyoteTimer = 0.15;
      this.player.canDash = true;
    } else {
      this.player.coyoteTimer -= dt;
    }

    if ((this.input.isKeyDown('KeyW') || this.input.isKeyDown('Space')) && this.player.coyoteTimer > 0) {
      this.player.velocity.y = -480;
      this.player.coyoteTimer = 0;
      this.audio.playJump();
      this.particles.emit(this.player.pos, 8, 80, [0, 0.9, 1, 1]);
    }

    // Cyber Dash
    if (this.input.isKeyDown('ShiftLeft') && this.player.canDash && moveX !== 0) {
      this.player.velocity.x = moveX * 600;
      this.player.canDash = false;
      this.audio.playLaser();
      this.particles.emit(this.player.pos, 20, 150, [1, 0, 0.8, 1]);
    }

    // Check Goal
    if (this.player.pos.distance(this.goalPos) < 32 && !this.isVictory) {
      this.isVictory = true;
      this.player.score += 1000;
      this.audio.playCoin();
      this.particles.emit(this.goalPos, 60, 200, [1, 0.85, 0.1, 1], 2.0, 8);
    }

    // Move & collide
    this.player.pos.x += this.player.velocity.x * dt;
    this.player.pos.y += this.player.velocity.y * dt;

    this.player.isGrounded = false;
    for (let i = 0; i < this.platforms.length; i++) {
      const p = this.platforms[i]!;
      if (
        this.player.pos.x + 12 > p.x &&
        this.player.pos.x - 12 < p.x + p.w &&
        this.player.pos.y + 16 >= p.y &&
        this.player.pos.y + 16 <= p.y + 16 &&
        this.player.velocity.y >= 0
      ) {
        this.player.pos.y = p.y - 16;
        this.player.velocity.y = 0;
        this.player.isGrounded = true;
      }
    }

    if (this.player.pos.y > 600 && !this.isGameOver) {
      this.isGameOver = true;
      this.audio.playExplosion();
    }

    this.particles.update(dt);
    this.input.update();
  }

  public render(): void {
    this.ctx.clear(0.04, 0.02, 0.08, 1);
    if (this.ctx.ctx2d) {
      const ctx = this.ctx.ctx2d;

      // Draw Platforms
      for (let i = 0; i < this.platforms.length; i++) {
        const p = this.platforms[i]!;
        ctx.fillStyle = '#1e1035';
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.fillStyle = '#ff007f';
        ctx.fillRect(p.x, p.y, p.w, 4);
      }

      // Draw Goal
      ctx.fillStyle = '#f1c40f';
      ctx.beginPath();
      ctx.arc(this.goalPos.x, this.goalPos.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px monospace';
      ctx.fillText("⭐ CORE", this.goalPos.x - 20, this.goalPos.y - 18);

      // Draw Player
      ctx.fillStyle = '#00f2fe';
      ctx.fillRect(this.player.pos.x - 12, this.player.pos.y - 16, 24, 32);

      this.particles.render(this.batch);

      // HUD
      ctx.fillStyle = 'rgba(10, 15, 25, 0.85)';
      ctx.fillRect(10, 10, 320, 45);
      ctx.fillStyle = '#ff007f';
      ctx.font = 'bold 14px monospace';
      ctx.fillText("CYBER RUNNER | ASCEND TO CORE", 20, 30);
      ctx.fillStyle = '#00f2fe';
      ctx.fillText(`DASH: ${this.player.canDash ? 'READY (SHIFT)' : 'CHARGING'} | SCORE: ${this.player.score}`, 20, 46);

      // VICTORY SCREEN
      if (this.isVictory) {
        ctx.fillStyle = 'rgba(5, 25, 20, 0.9)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#2ecc71';
        ctx.font = 'bold 36px monospace';
        ctx.textAlign = 'center';
        ctx.fillText("🏆 SUMMIT REACHED!", this.canvas.width * 0.5, this.canvas.height * 0.38);
        ctx.fillStyle = '#ffffff';
        ctx.font = '18px monospace';
        ctx.fillText("Quantum Power Core Successfully Secured!", this.canvas.width * 0.5, this.canvas.height * 0.48);
        ctx.fillStyle = '#1f6feb';
        ctx.fillRect(this.canvas.width * 0.5 - 130, this.canvas.height * 0.58, 260, 50);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px monospace';
        ctx.fillText("▶ PLAY AGAIN (Click)", this.canvas.width * 0.5, this.canvas.height * 0.58 + 32);
        ctx.textAlign = 'left';
      }

      // GAME OVER SCREEN
      if (this.isGameOver) {
        ctx.fillStyle = 'rgba(30, 5, 5, 0.9)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#e74c3c';
        ctx.font = 'bold 38px monospace';
        ctx.textAlign = 'center';
        ctx.fillText("💀 CRITICAL FAILURE", this.canvas.width * 0.5, this.canvas.height * 0.38);
        ctx.fillStyle = '#ffffff';
        ctx.font = '18px monospace';
        ctx.fillText("Fell into cyber abyss", this.canvas.width * 0.5, this.canvas.height * 0.48);
        ctx.fillStyle = '#c0392b';
        ctx.fillRect(this.canvas.width * 0.5 - 120, this.canvas.height * 0.58, 240, 50);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px monospace';
        ctx.fillText("🔄 RESPAWN (R/Click)", this.canvas.width * 0.5, this.canvas.height * 0.58 + 32);
        ctx.textAlign = 'left';
      }
    }
  }
}
