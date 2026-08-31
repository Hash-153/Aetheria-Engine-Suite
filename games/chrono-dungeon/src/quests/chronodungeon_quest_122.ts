// ChronoDungeon Epic Questline #122
export interface QuestlineDefinition_122 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_122: QuestlineDefinition_122 = {
  questId: 'quest_chrono_epoch_122',
  questTitle: 'The Temporal Fracture #122',
  narrativeDescription: 'Chrono-anomaly index 122 has warped the timeline inside Sector 122. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 18800,
  goldReward: 6300,
  objectives: [
    { id: 'obj_122_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_122_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
