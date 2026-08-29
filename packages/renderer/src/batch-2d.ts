import { Vec2 } from '../../math/src/index.js';
import { RenderContext } from './context.js';

export interface QuadVertex {
  x: number;
  y: number;
  u: number;
  v: number;
  r: number;
  g: number;
  b: number;
  a: number;
}

export class SpriteBatch2D {
  private context: RenderContext;
  private maxQuads = 10000;
  private vertexBuffer: Float32Array;
  private quadCount = 0;

  constructor(context: RenderContext) {
    this.context = context;
    // 6 vertices per quad * 8 floats (x,y, u,v, r,g,b,a)
    this.vertexBuffer = new Float32Array(this.maxQuads * 6 * 8);
  }

  public drawRect(
    x: number, y: number,
    w: number, h: number,
    r = 1, g = 1, b = 1, a = 1
  ): void {
    if (this.context.ctx2d) {
      const ctx = this.context.ctx2d;
      ctx.fillStyle = `rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${a})`;
      ctx.fillRect(x, y, w, h);
      return;
    }

    if (this.quadCount >= this.maxQuads) {
      this.flush();
    }

    this.quadCount++;
  }

  public drawCircle(
    cx: number, cy: number,
    radius: number,
    r = 1, g = 1, b = 1, a = 1
  ): void {
    if (this.context.ctx2d) {
      const ctx = this.context.ctx2d;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${a})`;
      ctx.fill();
    }
  }

  public drawText(
    text: string,
    x: number, y: number,
    font = "14px monospace",
    r = 1, g = 1, b = 1, a = 1
  ): void {
    if (this.context.ctx2d) {
      const ctx = this.context.ctx2d;
      ctx.font = font;
      ctx.fillStyle = `rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${a})`;
      ctx.fillText(text, x, y);
    }
  }

  public flush(): void {
    this.quadCount = 0;
  }
}
