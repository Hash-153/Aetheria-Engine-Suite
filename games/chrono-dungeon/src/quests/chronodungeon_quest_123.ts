// ChronoDungeon Epic Questline #123
export interface QuestlineDefinition_123 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_123: QuestlineDefinition_123 = {
  questId: 'quest_chrono_epoch_123',
  questTitle: 'The Temporal Fracture #123',
  narrativeDescription: 'Chrono-anomaly index 123 has warped the timeline inside Sector 123. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 18950,
  goldReward: 6350,
  objectives: [
    { id: 'obj_123_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_123_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
