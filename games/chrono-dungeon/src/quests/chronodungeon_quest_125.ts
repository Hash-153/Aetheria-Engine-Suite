// ChronoDungeon Epic Questline #125
export interface QuestlineDefinition_125 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_125: QuestlineDefinition_125 = {
  questId: 'quest_chrono_epoch_125',
  questTitle: 'The Temporal Fracture #125',
  narrativeDescription: 'Chrono-anomaly index 125 has warped the timeline inside Sector 125. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 19250,
  goldReward: 6450,
  objectives: [
    { id: 'obj_125_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_125_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
