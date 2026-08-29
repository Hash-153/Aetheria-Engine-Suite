// AI Behavior Tree Decision Strategy #017
import { BTNode, NodeState, Blackboard } from '../behavior-tree.js';
import { Vec2 } from '../../../math/src/index.js';

export class TacticalCombatTask_17 extends BTNode {
  public combatTier: number = 17;
  public preferredDistance: number = 205;

  public tick(bb: Blackboard, dt: number): NodeState {
    const hp = bb.get<number>('hp', 100);
    const targetDist = bb.get<number>('targetDist', 300);

    if (hp < 20) {
      bb.set('action', 'DISENGAGE');
      return NodeState.SUCCESS;
    }

    if (targetDist < this.preferredDistance) {
      bb.set('action', 'ATTACK_BURST_17');
      return NodeState.SUCCESS;
    }

    bb.set('action', 'ADVANCE');
    return NodeState.SUCCESS;
  }
}
