// AI Behavior Tree Decision Strategy #112
import { BTNode, NodeState, Blackboard } from '../behavior-tree.js';
import { Vec2 } from '../../../math/src/index.js';

export class TacticalCombatTask_112 extends BTNode {
  public combatTier: number = 112;
  public preferredDistance: number = 680;

  public tick(bb: Blackboard, dt: number): NodeState {
    const hp = bb.get<number>('hp', 100);
    const targetDist = bb.get<number>('targetDist', 300);

    if (hp < 20) {
      bb.set('action', 'DISENGAGE');
      return NodeState.SUCCESS;
    }

    if (targetDist < this.preferredDistance) {
      bb.set('action', 'ATTACK_BURST_112');
      return NodeState.SUCCESS;
    }

    bb.set('action', 'ADVANCE');
    return NodeState.SUCCESS;
  }
}
