export interface DialogueOption {
  text: string;
  targetNodeId: string;
  condition?: () => boolean;
}

export interface DialogueNode {
  id: string;
  speaker: string;
  text: string;
  options?: DialogueOption[];
  onEnter?: () => void;
}

export class DialogueTree {
  private nodes = new Map<string, DialogueNode>();
  public currentNodeId?: string;

  public addNode(node: DialogueNode): this {
    this.nodes.set(node.id, node);
    if (!this.currentNodeId) this.currentNodeId = node.id;
    return this;
  }

  public getCurrentNode(): DialogueNode | undefined {
    return this.currentNodeId ? this.nodes.get(this.currentNodeId) : undefined;
  }

  public selectOption(index: number): boolean {
    const node = this.getCurrentNode();
    if (!node || !node.options || !node.options[index]) return false;

    const opt = node.options[index]!;
    if (opt.condition && !opt.condition()) return false;

    this.currentNodeId = opt.targetNodeId;
    const next = this.getCurrentNode();
    if (next && next.onEnter) next.onEnter();
    return true;
  }
}
