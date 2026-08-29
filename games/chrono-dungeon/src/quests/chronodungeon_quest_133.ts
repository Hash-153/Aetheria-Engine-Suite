// ChronoDungeon Epic Questline #133
export interface QuestlineDefinition_133 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_133: QuestlineDefinition_133 = {
  questId: 'quest_chrono_epoch_133',
  questTitle: 'The Temporal Fracture #133',
  narrativeDescription: 'Chrono-anomaly index 133 has warped the timeline inside Sector 133. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 20450,
  goldReward: 6850,
  objectives: [
    { id: 'obj_133_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_133_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
