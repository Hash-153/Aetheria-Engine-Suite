// ChronoDungeon Epic Questline #106
export interface QuestlineDefinition_106 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_106: QuestlineDefinition_106 = {
  questId: 'quest_chrono_epoch_106',
  questTitle: 'The Temporal Fracture #106',
  narrativeDescription: 'Chrono-anomaly index 106 has warped the timeline inside Sector 106. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 16400,
  goldReward: 5500,
  objectives: [
    { id: 'obj_106_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_106_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
