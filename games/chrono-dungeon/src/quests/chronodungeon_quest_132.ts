// ChronoDungeon Epic Questline #132
export interface QuestlineDefinition_132 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_132: QuestlineDefinition_132 = {
  questId: 'quest_chrono_epoch_132',
  questTitle: 'The Temporal Fracture #132',
  narrativeDescription: 'Chrono-anomaly index 132 has warped the timeline inside Sector 132. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 20300,
  goldReward: 6800,
  objectives: [
    { id: 'obj_132_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_132_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
