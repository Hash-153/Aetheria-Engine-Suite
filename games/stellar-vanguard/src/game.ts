import { Vec2 } from '../../../packages/math/src/index.js';
import { RenderContext, SpriteBatch2D, Camera2D, ParticleEmitter2D } from '../../../packages/renderer/src/index.js';
import { ProceduralAudioEngine } from '../../../packages/audio/src/index.js';
import { InputManager } from '../../../packages/ui/src/index.js';
import { SteeringBehaviors, BoidAgent } from '../../../packages/ai/src/index.js';

export interface SpaceUnit extends BoidAgent {
  id: number;
  hp: number;
  maxHp: number;
  isEnemy: boolean;
  target?: Vec2;
}

export class StellarVanguardGame {
  private canvas: HTMLCanvasElement;
  private ctx: RenderContext;
  private batch: SpriteBatch2D;
  private camera: Camera2D;
  private particles: ParticleEmitter2D;
  private audio: ProceduralAudioEngine;
  private input: InputManager;

  public units: SpaceUnit[] = [];
  public minerals = 500;
  public energy = 100;
  public wave = 1;
  public isVictory = false;
  public isGameOver = false;
  private spawnTimer = 3.0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = new RenderContext(canvas, false);
    this.batch = new SpriteBatch2D(this.ctx);
    this.camera = new Camera2D();
    this.particles = new ParticleEmitter2D();
    this.audio = new ProceduralAudioEngine();
    this.input = new InputManager();

    this.initFleet();
  }

  public initFleet(): void {
    this.units = [];
    this.isVictory = false;
    this.isGameOver = false;
    for (let i = 0; i < 8; i++) {
      this.units.push({
        id: i,
        position: new Vec2(100 + (i % 3) * 40, 200 + Math.floor(i / 3) * 40),
        velocity: new Vec2(),
        maxSpeed: 180,
        maxForce: 250,
        hp: 100,
        maxHp: 100,
        isEnemy: false
      });
    }
  }

  public restartGame(): void {
    this.wave = 1;
    this.minerals = 500;
    this.initFleet();
  }

  public nextSector(): void {
    this.wave = 1;
    this.minerals += 500;
    this.initFleet();
  }

  public update(dt: number): void {
    if (this.isVictory) {
      if (this.input.isKeyDown('KeyR') || this.input.isKeyDown('Enter') || this.input.isMouseJustPressed) {
        this.nextSector();
        return;
      }
    } else if (this.isGameOver) {
      if (this.input.isKeyDown('KeyR') || this.input.isKeyDown('Enter') || this.input.isMouseJustPressed) {
        this.restartGame();
        return;
      }
    }

    if (this.isVictory || this.isGameOver) return;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 7.0;
      this.wave++;
      if (this.wave > 5) {
        this.isVictory = true;
        this.audio.playCoin();
        return;
      }
      for (let i = 0; i < 4 + this.wave; i++) {
        this.units.push({
          id: 1000 + i + this.wave * 10,
          position: new Vec2(750, 100 + i * 60),
          velocity: new Vec2(-50, 0),
          maxSpeed: 130,
          maxForce: 180,
          hp: 60,
          maxHp: 60,
          isEnemy: true
        });
      }
    }

    // Right-click order to move
    if (this.input.isMouseDown) {
      const target = new Vec2(this.input.mouseX, this.input.mouseY);
      for (let i = 0; i < this.units.length; i++) {
        if (!this.units[i]!.isEnemy) {
          this.units[i]!.target = target;
        }
      }
    }

    // Unit flocking & combat
    const playerUnits = this.units.filter(o => !o.isEnemy);
    if (playerUnits.length === 0 && !this.isGameOver) {
      this.isGameOver = true;
      this.audio.playExplosion();
    }

    for (let i = 0; i < this.units.length; i++) {
      const u = this.units[i]!;
      const friends = this.units.filter(o => o.isEnemy === u.isEnemy);
      const enemies = this.units.filter(o => o.isEnemy !== u.isEnemy);

      const steer = SteeringBehaviors.flock(u, friends, 25, 70);

      if (!u.isEnemy && u.target) {
        steer.add(SteeringBehaviors.arrive(u, u.target, 80));
      } else if (u.isEnemy && enemies.length > 0) {
        steer.add(SteeringBehaviors.seek(u, enemies[0]!.position));
      }

      u.velocity.add(Vec2.scale(steer, dt));
      u.velocity.clampLength(0, u.maxSpeed);
      u.position.add(Vec2.scale(u.velocity, dt));

      // Attack closest enemy
      for (let j = enemies.length - 1; j >= 0; j--) {
        const target = enemies[j]!;
        if (u.position.distance(target.position) < 90) {
          target.hp -= 35 * dt;
          if (Math.random() < 0.1) {
            this.audio.playLaser();
            this.particles.emit(target.position, 2, 60, [0, 0.8, 1, 1]);
          }

          if (target.hp <= 0) {
            this.audio.playExplosion();
            this.particles.emit(target.position, 15, 120, [1, 0.5, 0.1, 1]);
            const idx = this.units.indexOf(target);
            if (idx >= 0) this.units.splice(idx, 1);
            if (target.isEnemy) this.minerals += 25;
          }
        }
      }
    }

    this.particles.update(dt);
    this.input.update();
  }

  public render(): void {
    this.ctx.clear(0.02, 0.03, 0.06, 1);
    if (this.ctx.ctx2d) {
      const ctx = this.ctx.ctx2d;

      // Draw Grid / Stars
      ctx.strokeStyle = 'rgba(40, 60, 90, 0.2)';
      for (let x = 0; x < this.canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, this.canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < this.canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(this.canvas.width, y);
        ctx.stroke();
      }

      // Draw Units
      for (let i = 0; i < this.units.length; i++) {
        const u = this.units[i]!;
        ctx.fillStyle = u.isEnemy ? '#e74c3c' : '#00d2d3';
        ctx.beginPath();
        ctx.arc(u.position.x, u.position.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // HP bar
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(u.position.x - 10, u.position.y - 14, 20, 3);
        ctx.fillStyle = u.isEnemy ? '#e74c3c' : '#2ecc71';
        ctx.fillRect(u.position.x - 10, u.position.y - 14, (u.hp / u.maxHp) * 20, 3);
      }

      this.particles.render(this.batch);

      // HUD
      ctx.fillStyle = 'rgba(10, 15, 25, 0.85)';
      ctx.fillRect(10, 10, 340, 50);
      ctx.fillStyle = '#00d2d3';
      ctx.font = 'bold 14px monospace';
      ctx.fillText(`STELLAR VANGUARD | WAVE: ${this.wave}/5`, 20, 30);
      ctx.fillStyle = '#f1c40f';
      ctx.fillText(`MINERALS: ${this.minerals}  |  FLEET SIZE: ${this.units.filter(u => !u.isEnemy).length}`, 20, 48);

      // VICTORY SCREEN
      if (this.isVictory) {
        ctx.fillStyle = 'rgba(5, 20, 35, 0.9)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#2ecc71';
        ctx.font = 'bold 36px monospace';
        ctx.textAlign = 'center';
        ctx.fillText("🏆 VICTORY - SECTOR LIBERATED!", this.canvas.width * 0.5, this.canvas.height * 0.38);
        ctx.fillStyle = '#ffffff';
        ctx.font = '18px monospace';
        ctx.fillText(`All 5 Armada Waves Defeated! Total Minerals: ${this.minerals}`, this.canvas.width * 0.5, this.canvas.height * 0.48);
        ctx.fillStyle = '#1f6feb';
        ctx.fillRect(this.canvas.width * 0.5 - 140, this.canvas.height * 0.58, 280, 50);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px monospace';
        ctx.fillText("▶ DEFEND NEXT SECTOR (Click)", this.canvas.width * 0.5, this.canvas.height * 0.58 + 32);
        ctx.textAlign = 'left';
      }

      // GAME OVER SCREEN
      if (this.isGameOver) {
        ctx.fillStyle = 'rgba(30, 5, 5, 0.9)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#e74c3c';
        ctx.font = 'bold 38px monospace';
        ctx.textAlign = 'center';
        ctx.fillText("💀 FLEET DESTROYED", this.canvas.width * 0.5, this.canvas.height * 0.38);
        ctx.fillStyle = '#ffffff';
        ctx.font = '18px monospace';
        ctx.fillText("All vessels lost in combat against the armada", this.canvas.width * 0.5, this.canvas.height * 0.48);
        ctx.fillStyle = '#c0392b';
        ctx.fillRect(this.canvas.width * 0.5 - 120, this.canvas.height * 0.58, 240, 50);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px monospace';
        ctx.fillText("🔄 REBUILD FLEET (R/Click)", this.canvas.width * 0.5, this.canvas.height * 0.58 + 32);
        ctx.textAlign = 'left';
      }
    }
  }
}
