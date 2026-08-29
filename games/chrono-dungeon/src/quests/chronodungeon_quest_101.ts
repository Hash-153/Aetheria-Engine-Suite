// ChronoDungeon Epic Questline #101
export interface QuestlineDefinition_101 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_101: QuestlineDefinition_101 = {
  questId: 'quest_chrono_epoch_101',
  questTitle: 'The Temporal Fracture #101',
  narrativeDescription: 'Chrono-anomaly index 101 has warped the timeline inside Sector 101. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 15650,
  goldReward: 5250,
  objectives: [
    { id: 'obj_101_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_101_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
