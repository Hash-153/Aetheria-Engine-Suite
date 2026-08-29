// ChronoDungeon Epic Questline #013
export interface QuestlineDefinition_13 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_13: QuestlineDefinition_13 = {
  questId: 'quest_chrono_epoch_013',
  questTitle: 'The Temporal Fracture #013',
  narrativeDescription: 'Chrono-anomaly index 13 has warped the timeline inside Sector 13. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 2450,
  goldReward: 850,
  objectives: [
    { id: 'obj_13_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_13_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
