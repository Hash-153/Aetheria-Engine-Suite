// ChronoDungeon Epic Questline #128
export interface QuestlineDefinition_128 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_128: QuestlineDefinition_128 = {
  questId: 'quest_chrono_epoch_128',
  questTitle: 'The Temporal Fracture #128',
  narrativeDescription: 'Chrono-anomaly index 128 has warped the timeline inside Sector 128. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 19700,
  goldReward: 6600,
  objectives: [
    { id: 'obj_128_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_128_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
