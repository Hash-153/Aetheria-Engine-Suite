export interface PlayerInputFrame {
  frame: number;
  playerId: number;
  buttons: number;
  mouseX: number;
  mouseY: number;
}

export class LockstepEngine {
  public currentFrame: number = 0;
  private inputBuffer: Map<number, PlayerInputFrame[]> = new Map();
  public maxRollbackFrames: number = 7;

  public queueInput(frame: number, input: PlayerInputFrame): void {
    let list = this.inputBuffer.get(frame);
    if (!list) {
      list = [];
      this.inputBuffer.set(frame, list);
    }
    list.push(input);
  }

  public getInputsForFrame(frame: number): PlayerInputFrame[] {
    return this.inputBuffer.get(frame) || [];
  }

  public advanceFrame(): void {
    this.currentFrame++;
    // Clean old history
    this.inputBuffer.delete(this.currentFrame - this.maxRollbackFrames - 1);
  }
}
