export enum NodeState {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  RUNNING = 'RUNNING'
}

export class Blackboard {
  private data = new Map<string, any>();

  public set(key: string, value: any): void {
    this.data.set(key, value);
  }

  public get<T>(key: string, defaultValue?: T): T {
    return (this.data.has(key) ? this.data.get(key) : defaultValue) as T;
  }

  public has(key: string): boolean {
    return this.data.has(key);
  }
}

export abstract class BTNode {
  abstract tick(blackboard: Blackboard, dt: number): NodeState;
}

export class SequenceNode extends BTNode {
  private children: BTNode[];

  constructor(...children: BTNode[]) {
    super();
    this.children = children;
  }

  public tick(bb: Blackboard, dt: number): NodeState {
    for (let i = 0; i < this.children.length; i++) {
      const state = this.children[i]!.tick(bb, dt);
      if (state !== NodeState.SUCCESS) {
        return state;
      }
    }
    return NodeState.SUCCESS;
  }
}

export class SelectorNode extends BTNode {
  private children: BTNode[];

  constructor(...children: BTNode[]) {
    super();
    this.children = children;
  }

  public tick(bb: Blackboard, dt: number): NodeState {
    for (let i = 0; i < this.children.length; i++) {
      const state = this.children[i]!.tick(bb, dt);
      if (state !== NodeState.FAILURE) {
        return state;
      }
    }
    return NodeState.FAILURE;
  }
}

export class ActionNode extends BTNode {
  private action: (bb: Blackboard, dt: number) => NodeState;

  constructor(action: (bb: Blackboard, dt: number) => NodeState) {
    super();
    this.action = action;
  }

  public tick(bb: Blackboard, dt: number): NodeState {
    return this.action(bb, dt);
  }
}
