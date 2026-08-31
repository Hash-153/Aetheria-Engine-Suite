// ChronoDungeon Epic Questline #146
export interface QuestlineDefinition_146 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_146: QuestlineDefinition_146 = {
  questId: 'quest_chrono_epoch_146',
  questTitle: 'The Temporal Fracture #146',
  narrativeDescription: 'Chrono-anomaly index 146 has warped the timeline inside Sector 146. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 22400,
  goldReward: 7500,
  objectives: [
    { id: 'obj_146_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_146_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
