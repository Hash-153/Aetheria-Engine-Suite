// ChronoDungeon Epic Questline #104
export interface QuestlineDefinition_104 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_104: QuestlineDefinition_104 = {
  questId: 'quest_chrono_epoch_104',
  questTitle: 'The Temporal Fracture #104',
  narrativeDescription: 'Chrono-anomaly index 104 has warped the timeline inside Sector 104. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 16100,
  goldReward: 5400,
  objectives: [
    { id: 'obj_104_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_104_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
