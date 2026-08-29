// ChronoDungeon Epic Questline #073
export interface QuestlineDefinition_73 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_73: QuestlineDefinition_73 = {
  questId: 'quest_chrono_epoch_073',
  questTitle: 'The Temporal Fracture #073',
  narrativeDescription: 'Chrono-anomaly index 73 has warped the timeline inside Sector 73. Restore temporal stability before the collapse.',
  requiredLevel: 8,
  experienceReward: 11450,
  goldReward: 3850,
  objectives: [
    { id: 'obj_73_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_73_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
