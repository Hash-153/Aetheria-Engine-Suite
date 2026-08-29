// ChronoDungeon Epic Questline #061
export interface QuestlineDefinition_61 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_61: QuestlineDefinition_61 = {
  questId: 'quest_chrono_epoch_061',
  questTitle: 'The Temporal Fracture #061',
  narrativeDescription: 'Chrono-anomaly index 61 has warped the timeline inside Sector 61. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 9650,
  goldReward: 3250,
  objectives: [
    { id: 'obj_61_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_61_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
