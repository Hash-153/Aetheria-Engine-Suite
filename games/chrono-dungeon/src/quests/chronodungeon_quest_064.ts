// ChronoDungeon Epic Questline #064
export interface QuestlineDefinition_64 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_64: QuestlineDefinition_64 = {
  questId: 'quest_chrono_epoch_064',
  questTitle: 'The Temporal Fracture #064',
  narrativeDescription: 'Chrono-anomaly index 64 has warped the timeline inside Sector 64. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 10100,
  goldReward: 3400,
  objectives: [
    { id: 'obj_64_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_64_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
