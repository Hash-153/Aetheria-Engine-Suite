import { Vec2 } from '../../../packages/math/src/index.js';
import { World } from '../../../packages/ecs/src/index.js';
import { RenderContext, SpriteBatch2D, Camera2D, ParticleEmitter2D } from '../../../packages/renderer/src/index.js';
import { ProceduralAudioEngine } from '../../../packages/audio/src/index.js';
import { BSPDungeonGenerator, Rect } from '../../../packages/level-tools/src/index.js';
import { InputManager } from '../../../packages/ui/src/index.js';
import { AStarGrid2D } from '../../../packages/ai/src/index.js';

export interface DungeonPlayer {
  pos: Vec2;
  hp: number;
  maxHp: number;
  attackPower: number;
  score: number;
  speed: number;
}

export interface DungeonEnemy {
  id: number;
  pos: Vec2;
  hp: number;
  maxHp: number;
  attack: number;
  speed: number;
  color: [number, number, number, number];
  path: Vec2[];
  pathTimer: number;
}

export class ChronoDungeonGame {
  private canvas: HTMLCanvasElement;
  private ctx: RenderContext;
  private batch: SpriteBatch2D;
  private camera: Camera2D;
  private particles: ParticleEmitter2D;
  private audio: ProceduralAudioEngine;
  private input: InputManager;

  public player: DungeonPlayer;
  public enemies: DungeonEnemy[] = [];
  public dungeon: BSPDungeonGenerator;
  public rooms: Rect[] = [];
  public astar: AStarGrid2D;
  public tileSize = 32;
  public isGameOver = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = new RenderContext(canvas, false);
    this.batch = new SpriteBatch2D(this.ctx);
    this.camera = new Camera2D();
    this.particles = new ParticleEmitter2D();
    this.audio = new ProceduralAudioEngine();
    this.input = new InputManager();

    this.dungeon = new BSPDungeonGenerator(40, 30);
    this.astar = new AStarGrid2D(40, 30);

    this.player = {
      pos: new Vec2(5, 5),
      hp: 100,
      maxHp: 100,
      attackPower: 25,
      score: 0,
      speed: 160
    };

    this.initLevel();
  }

  public initLevel(): void {
    this.rooms = this.dungeon.generate(4, 5);

    for (let x = 0; x < this.dungeon.width; x++) {
      for (let y = 0; y < this.dungeon.height; y++) {
        this.astar.setWalkable(x, y, this.dungeon.grid[x]![y] === 1);
      }
    }

    if (this.rooms.length > 0) {
      const first = this.rooms[0]!;
      this.player.pos.set(
        (first.x + Math.floor(first.w * 0.5)) * this.tileSize,
        (first.y + Math.floor(first.h * 0.5)) * this.tileSize
      );

      this.enemies = [];
      for (let i = 1; i < this.rooms.length; i++) {
        const r = this.rooms[i]!;
        this.enemies.push({
          id: i,
          pos: new Vec2((r.x + Math.floor(r.w * 0.5)) * this.tileSize, (r.y + Math.floor(r.h * 0.5)) * this.tileSize),
          hp: 40 + i * 10,
          maxHp: 40 + i * 10,
          attack: 10 + i * 2,
          speed: 70 + Math.random() * 20,
          color: [0.9, 0.2, 0.2, 1],
          path: [],
          pathTimer: 0
        });
      }
    }
  }

  public update(dt: number): void {
    if (this.isGameOver) return;

    // Movement
    const move = new Vec2();
    if (this.input.isKeyDown('KeyW') || this.input.isKeyDown('ArrowUp')) move.y -= 1;
    if (this.input.isKeyDown('KeyS') || this.input.isKeyDown('ArrowDown')) move.y += 1;
    if (this.input.isKeyDown('KeyA') || this.input.isKeyDown('ArrowLeft')) move.x -= 1;
    if (this.input.isKeyDown('KeyD') || this.input.isKeyDown('ArrowRight')) move.x += 1;

    if (move.lengthSq() > 0) {
      move.normalize().scale(this.player.speed * dt);
      const nextX = this.player.pos.x + move.x;
      const nextY = this.player.pos.y + move.y;

      const gx = Math.floor(nextX / this.tileSize);
      const gy = Math.floor(nextY / this.tileSize);

      if (this.dungeon.grid[gx]?.[gy] === 1) {
        this.player.pos.set(nextX, nextY);
      }
    }

    // Camera tracking
    this.camera.target.copy(this.player.pos);
    this.camera.update(dt);
    this.particles.update(dt);

    // Attack on Space
    if (this.input.isKeyDown('Space')) {
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const e = this.enemies[i]!;
        if (this.player.pos.distance(e.pos) < 50) {
          e.hp -= this.player.attackPower * dt * 5;
          this.audio.playLaser();
          this.camera.shake(4, 0.1);
          this.particles.emit(e.pos, 5, 80, [1, 0.2, 0.2, 1]);

          if (e.hp <= 0) {
            this.audio.playExplosion();
            this.particles.emit(e.pos, 20, 150, [1, 0.8, 0.2, 1]);
            this.player.score += 100;
            this.enemies.splice(i, 1);
          }
        }
      }
    }

    // Enemy AI
    const pGridX = Math.floor(this.player.pos.x / this.tileSize);
    const pGridY = Math.floor(this.player.pos.y / this.tileSize);

    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i]!;
      e.pathTimer -= dt;
      if (e.pathTimer <= 0) {
        e.pathTimer = 0.5 + Math.random() * 0.2;
        const eGridX = Math.floor(e.pos.x / this.tileSize);
        const eGridY = Math.floor(e.pos.y / this.tileSize);
        e.path = this.astar.findPath(eGridX, eGridY, pGridX, pGridY);
      }

      if (e.path.length > 1) {
        const targetNode = e.path[1]!;
        const targetWorld = new Vec2(
          targetNode.x * this.tileSize + this.tileSize * 0.5,
          targetNode.y * this.tileSize + this.tileSize * 0.5
        );
        const dir = Vec2.sub(targetWorld, e.pos).normalize();
        e.pos.add(Vec2.scale(dir, e.speed * dt));
      }

      // Attack player
      if (e.pos.distance(this.player.pos) < 24) {
        this.player.hp -= e.attack * dt;
        this.camera.shake(6, 0.1);
        if (this.player.hp <= 0) {
          this.player.hp = 0;
          this.isGameOver = true;
          this.audio.playExplosion();
        }
      }
    }

    this.input.update();
  }

  public render(): void {
    this.ctx.clear(0.08, 0.08, 0.12, 1);
    const offset = this.camera.getOffset();

    if (this.ctx.ctx2d) {
      const ctx = this.ctx.ctx2d;
      ctx.save();
      ctx.translate(offset.x, offset.y);

      // Draw Dungeon Tiles
      for (let x = 0; x < this.dungeon.width; x++) {
        for (let y = 0; y < this.dungeon.height; y++) {
          const isFloor = this.dungeon.grid[x]![y] === 1;
          ctx.fillStyle = isFloor ? '#1e2430' : '#0b0d13';
          ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize - 1, this.tileSize - 1);
        }
      }

      // Draw Enemies
      for (let i = 0; i < this.enemies.length; i++) {
        const e = this.enemies[i]!;
        ctx.fillStyle = '#e74c3c';
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, 14, 0, Math.PI * 2);
        ctx.fill();

        // Enemy HP bar
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(e.pos.x - 16, e.pos.y - 24, 32, 4);
        ctx.fillStyle = '#2ecc71';
        ctx.fillRect(e.pos.x - 16, e.pos.y - 24, (e.hp / e.maxHp) * 32, 4);
      }

      // Draw Player
      ctx.fillStyle = '#3498db';
      ctx.beginPath();
      ctx.arc(this.player.pos.x, this.player.pos.y, 16, 0, Math.PI * 2);
      ctx.fill();

      // Render Particles
      this.particles.render(this.batch);

      ctx.restore();

      // Draw HUD
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(10, 10, 240, 70);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px monospace';
      ctx.fillText(`CHRONO DUNGEON - SCORE: ${this.player.score}`, 20, 32);

      // Health bar
      ctx.fillStyle = '#c0392b';
      ctx.fillRect(20, 44, 200, 16);
      ctx.fillStyle = '#2ecc71';
      ctx.fillRect(20, 44, Math.max(0, (this.player.hp / this.player.maxHp) * 200), 16);

      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.fillText(`HP: ${Math.ceil(this.player.hp)} / ${this.player.maxHp}`, 70, 57);

      if (this.isGameOver) {
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#e74c3c';
        ctx.font = 'bold 36px monospace';
        ctx.fillText("GAME OVER", this.canvas.width * 0.5 - 100, this.canvas.height * 0.5);
      }
    }
  }
}
