// ChronoDungeon Epic Questline #108
export interface QuestlineDefinition_108 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_108: QuestlineDefinition_108 = {
  questId: 'quest_chrono_epoch_108',
  questTitle: 'The Temporal Fracture #108',
  narrativeDescription: 'Chrono-anomaly index 108 has warped the timeline inside Sector 108. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 16700,
  goldReward: 5600,
  objectives: [
    { id: 'obj_108_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_108_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
