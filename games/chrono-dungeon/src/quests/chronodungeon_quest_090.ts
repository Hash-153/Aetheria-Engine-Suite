// ChronoDungeon Epic Questline #090
export interface QuestlineDefinition_90 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_90: QuestlineDefinition_90 = {
  questId: 'quest_chrono_epoch_090',
  questTitle: 'The Temporal Fracture #090',
  narrativeDescription: 'Chrono-anomaly index 90 has warped the timeline inside Sector 90. Restore temporal stability before the collapse.',
  requiredLevel: 10,
  experienceReward: 14000,
  goldReward: 4700,
  objectives: [
    { id: 'obj_90_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_90_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
