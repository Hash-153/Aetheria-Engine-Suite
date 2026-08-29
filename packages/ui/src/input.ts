export class InputManager {
  private keys = new Set<string>();
  public mouseX: number = 0;
  public mouseY: number = 0;
  public isMouseDown: boolean = false;
  public isMouseJustPressed: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => this.keys.add(e.code));
      window.addEventListener('keyup', (e) => this.keys.delete(e.code));
      window.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      });
      window.addEventListener('mousedown', () => {
        this.isMouseDown = true;
        this.isMouseJustPressed = true;
      });
      window.addEventListener('mouseup', () => {
        this.isMouseDown = false;
      });
    }
  }

  public isKeyDown(code: string): boolean {
    return this.keys.has(code);
  }

  public update(): void {
    this.isMouseJustPressed = false;
  }
}
