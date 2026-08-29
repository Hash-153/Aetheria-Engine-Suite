export enum QuestState {
  UNASSIGNED = 'UNASSIGNED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface QuestObjective {
  id: string;
  description: string;
  isComplete: boolean;
}

export class Quest {
  public id: string;
  public title: string;
  public description: string;
  public state: QuestState = QuestState.UNASSIGNED;
  public objectives: QuestObjective[] = [];

  constructor(id: string, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  public addObjective(id: string, description: string): this {
    this.objectives.push({ id, description, isComplete: false });
    return this;
  }

  public completeObjective(id: string): void {
    const obj = this.objectives.find(o => o.id === id);
    if (obj) obj.isComplete = true;

    if (this.objectives.every(o => o.isComplete)) {
      this.state = QuestState.COMPLETED;
    }
  }
}
