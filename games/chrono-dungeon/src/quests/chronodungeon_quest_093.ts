// ChronoDungeon Epic Questline #093
export interface QuestlineDefinition_93 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_93: QuestlineDefinition_93 = {
  questId: 'quest_chrono_epoch_093',
  questTitle: 'The Temporal Fracture #093',
  narrativeDescription: 'Chrono-anomaly index 93 has warped the timeline inside Sector 93. Restore temporal stability before the collapse.',
  requiredLevel: 10,
  experienceReward: 14450,
  goldReward: 4850,
  objectives: [
    { id: 'obj_93_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_93_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
