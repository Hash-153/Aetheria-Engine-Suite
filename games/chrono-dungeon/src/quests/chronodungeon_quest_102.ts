// ChronoDungeon Epic Questline #102
export interface QuestlineDefinition_102 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_102: QuestlineDefinition_102 = {
  questId: 'quest_chrono_epoch_102',
  questTitle: 'The Temporal Fracture #102',
  narrativeDescription: 'Chrono-anomaly index 102 has warped the timeline inside Sector 102. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 15800,
  goldReward: 5300,
  objectives: [
    { id: 'obj_102_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_102_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
