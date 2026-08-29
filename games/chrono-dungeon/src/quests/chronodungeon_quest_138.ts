// ChronoDungeon Epic Questline #138
export interface QuestlineDefinition_138 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_138: QuestlineDefinition_138 = {
  questId: 'quest_chrono_epoch_138',
  questTitle: 'The Temporal Fracture #138',
  narrativeDescription: 'Chrono-anomaly index 138 has warped the timeline inside Sector 138. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 21200,
  goldReward: 7100,
  objectives: [
    { id: 'obj_138_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_138_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
