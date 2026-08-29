// ChronoDungeon Epic Questline #091
export interface QuestlineDefinition_91 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_91: QuestlineDefinition_91 = {
  questId: 'quest_chrono_epoch_091',
  questTitle: 'The Temporal Fracture #091',
  narrativeDescription: 'Chrono-anomaly index 91 has warped the timeline inside Sector 91. Restore temporal stability before the collapse.',
  requiredLevel: 10,
  experienceReward: 14150,
  goldReward: 4750,
  objectives: [
    { id: 'obj_91_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_91_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
