// ChronoDungeon Epic Questline #018
export interface QuestlineDefinition_18 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_18: QuestlineDefinition_18 = {
  questId: 'quest_chrono_epoch_018',
  questTitle: 'The Temporal Fracture #018',
  narrativeDescription: 'Chrono-anomaly index 18 has warped the timeline inside Sector 18. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 3200,
  goldReward: 1100,
  objectives: [
    { id: 'obj_18_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_18_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
