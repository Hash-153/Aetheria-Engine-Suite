export class RenderContext {
  public canvas: HTMLCanvasElement;
  public gl: WebGL2RenderingContext | null = null;
  public ctx2d: CanvasRenderingContext2D | null = null;
  public isWebGL: boolean = false;

  constructor(canvas: HTMLCanvasElement, preferWebGL = true) {
    this.canvas = canvas;
    if (preferWebGL) {
      this.gl = canvas.getContext('webgl2', { alpha: false, antialias: false, premultipliedAlpha: false });
    }
    if (this.gl) {
      this.isWebGL = true;
    } else {
      this.ctx2d = canvas.getContext('2d')!;
      this.isWebGL = false;
    }
  }

  public resize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
    if (this.gl) {
      this.gl.viewport(0, 0, width, height);
    }
  }

  public clear(r = 0.05, g = 0.05, b = 0.08, a = 1.0): void {
    if (this.gl) {
      this.gl.clearColor(r, g, b, a);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    } else if (this.ctx2d) {
      this.ctx2d.fillStyle = `rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${a})`;
      this.ctx2d.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
