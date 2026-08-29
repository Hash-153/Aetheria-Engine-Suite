import { InputManager } from './input.js';
import { SpriteBatch2D } from '../../renderer/src/index.js';

export class UIButton {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public text: string;
  public isHovered = false;

  constructor(x: number, y: number, width: number, height: number, text: string) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  public update(input: InputManager): boolean {
    this.isHovered = (
      input.mouseX >= this.x &&
      input.mouseX <= this.x + this.width &&
      input.mouseY >= this.y &&
      input.mouseY <= this.y + this.height
    );

    return this.isHovered && input.isMouseJustPressed;
  }

  public render(batch: SpriteBatch2D): void {
    const bg = this.isHovered ? [0.25, 0.45, 0.85, 1.0] : [0.15, 0.2, 0.3, 0.9];
    batch.drawRect(this.x, this.y, this.width, this.height, bg[0], bg[1], bg[2], bg[3]);
    batch.drawText(
      this.text,
      this.x + 12,
      this.y + this.height * 0.65,
      "bold 14px monospace",
      1, 1, 1, 1
    );
  }
}
