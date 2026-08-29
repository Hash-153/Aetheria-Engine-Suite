// ChronoDungeon Epic Questline #063
export interface QuestlineDefinition_63 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_63: QuestlineDefinition_63 = {
  questId: 'quest_chrono_epoch_063',
  questTitle: 'The Temporal Fracture #063',
  narrativeDescription: 'Chrono-anomaly index 63 has warped the timeline inside Sector 63. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 9950,
  goldReward: 3350,
  objectives: [
    { id: 'obj_63_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_63_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
