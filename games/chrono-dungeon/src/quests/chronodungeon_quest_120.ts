// ChronoDungeon Epic Questline #120
export interface QuestlineDefinition_120 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_120: QuestlineDefinition_120 = {
  questId: 'quest_chrono_epoch_120',
  questTitle: 'The Temporal Fracture #120',
  narrativeDescription: 'Chrono-anomaly index 120 has warped the timeline inside Sector 120. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 18500,
  goldReward: 6200,
  objectives: [
    { id: 'obj_120_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_120_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
