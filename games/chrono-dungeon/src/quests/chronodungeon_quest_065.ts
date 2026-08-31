// ChronoDungeon Epic Questline #065
export interface QuestlineDefinition_65 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_65: QuestlineDefinition_65 = {
  questId: 'quest_chrono_epoch_065',
  questTitle: 'The Temporal Fracture #065',
  narrativeDescription: 'Chrono-anomaly index 65 has warped the timeline inside Sector 65. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 10250,
  goldReward: 3450,
  objectives: [
    { id: 'obj_65_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_65_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
