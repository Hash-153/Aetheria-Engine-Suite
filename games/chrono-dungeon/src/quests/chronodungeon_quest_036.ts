// ChronoDungeon Epic Questline #036
export interface QuestlineDefinition_36 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_36: QuestlineDefinition_36 = {
  questId: 'quest_chrono_epoch_036',
  questTitle: 'The Temporal Fracture #036',
  narrativeDescription: 'Chrono-anomaly index 36 has warped the timeline inside Sector 36. Restore temporal stability before the collapse.',
  requiredLevel: 4,
  experienceReward: 5900,
  goldReward: 2000,
  objectives: [
    { id: 'obj_36_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_36_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
