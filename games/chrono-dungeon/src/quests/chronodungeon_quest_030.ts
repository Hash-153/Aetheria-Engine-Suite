// ChronoDungeon Epic Questline #030
export interface QuestlineDefinition_30 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_30: QuestlineDefinition_30 = {
  questId: 'quest_chrono_epoch_030',
  questTitle: 'The Temporal Fracture #030',
  narrativeDescription: 'Chrono-anomaly index 30 has warped the timeline inside Sector 30. Restore temporal stability before the collapse.',
  requiredLevel: 4,
  experienceReward: 5000,
  goldReward: 1700,
  objectives: [
    { id: 'obj_30_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_30_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
