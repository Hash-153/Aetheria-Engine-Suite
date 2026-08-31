// ChronoDungeon Epic Questline #062
export interface QuestlineDefinition_62 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_62: QuestlineDefinition_62 = {
  questId: 'quest_chrono_epoch_062',
  questTitle: 'The Temporal Fracture #062',
  narrativeDescription: 'Chrono-anomaly index 62 has warped the timeline inside Sector 62. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 9800,
  goldReward: 3300,
  objectives: [
    { id: 'obj_62_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_62_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
