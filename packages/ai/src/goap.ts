export interface WorldState {
  [key: string]: boolean | number;
}

export interface GOAPAction {
  name: string;
  cost: number;
  preconditions: WorldState;
  effects: WorldState;
}

export class GOAPPlanner {
  public static plan(current: WorldState, goal: WorldState, actions: GOAPAction[]): GOAPAction[] | null {
    interface PlanNode {
      state: WorldState;
      cost: number;
      action?: GOAPAction;
      parent?: PlanNode;
    }

    const startNode: PlanNode = { state: { ...current }, cost: 0 };
    const open: PlanNode[] = [startNode];
    const closed: PlanNode[] = [];

    while (open.length > 0) {
      let lowestIdx = 0;
      for (let i = 1; i < open.length; i++) {
        if (open[i]!.cost < open[lowestIdx]!.cost) lowestIdx = i;
      }

      const curr = open.splice(lowestIdx, 1)[0]!;

      // Check if goal conditions are satisfied
      let match = true;
      for (const [k, v] of Object.entries(goal)) {
        if (curr.state[k] !== v) {
          match = false;
          break;
        }
      }

      if (match) {
        // Reconstruct action plan
        const plan: GOAPAction[] = [];
        let n: PlanNode | undefined = curr;
        while (n && n.action) {
          plan.unshift(n.action);
          n = n.parent;
        }
        return plan;
      }

      closed.push(curr);

      for (let i = 0; i < actions.length; i++) {
        const action = actions[i]!;

        // Check if preconditions are met
        let canExecute = true;
        for (const [pk, pv] of Object.entries(action.preconditions)) {
          if (curr.state[pk] !== pv) {
            canExecute = false;
            break;
          }
        }

        if (!canExecute) continue;

        // Apply effects
        const nextState = { ...curr.state, ...action.effects };
        const nextNode: PlanNode = {
          state: nextState,
          cost: curr.cost + action.cost,
          action,
          parent: curr
        };

        open.push(nextNode);
      }
    }

    return null;
  }
}
