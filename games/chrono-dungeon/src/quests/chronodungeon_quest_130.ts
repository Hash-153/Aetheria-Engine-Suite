// ChronoDungeon Epic Questline #130
export interface QuestlineDefinition_130 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_130: QuestlineDefinition_130 = {
  questId: 'quest_chrono_epoch_130',
  questTitle: 'The Temporal Fracture #130',
  narrativeDescription: 'Chrono-anomaly index 130 has warped the timeline inside Sector 130. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 20000,
  goldReward: 6700,
  objectives: [
    { id: 'obj_130_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_130_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
