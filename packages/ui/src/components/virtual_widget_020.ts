// Virtualized UI Widget Component #020
import { InputManager } from '../input.js';
import { SpriteBatch2D } from '../../../renderer/src/index.js';

export class VirtualizedWidget_20 {
  public x: number = 250;
  public y: number = 180;
  public width: number = 120;
  public height: number = 32;
  public isVisible: boolean = true;
  public isFocused: boolean = false;
  public backgroundColor: [number, number, number, number] = [0.1, 0.15, 0.22, 0.95];

  public update(input: InputManager): void {
    if (!this.isVisible) return;
    const isHover = (
      input.mouseX >= this.x && input.mouseX <= this.x + this.width &&
      input.mouseY >= this.y && input.mouseY <= this.y + this.height
    );

    if (isHover && input.isMouseJustPressed) {
      this.isFocused = true;
    } else if (input.isMouseJustPressed && !isHover) {
      this.isFocused = false;
    }
  }

  public render(batch: SpriteBatch2D): void {
    if (!this.isVisible) return;
    const bg = this.backgroundColor;
    batch.drawRect(this.x, this.y, this.width, this.height, bg[0], bg[1], bg[2], bg[3]);
    if (this.isFocused) {
      batch.drawRect(this.x - 2, this.y - 2, this.width + 4, 2, 0.2, 0.6, 1.0, 1.0);
    }
  }
}
