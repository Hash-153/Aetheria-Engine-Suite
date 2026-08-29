// ChronoDungeon Epic Questline #010
export interface QuestlineDefinition_10 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_10: QuestlineDefinition_10 = {
  questId: 'quest_chrono_epoch_010',
  questTitle: 'The Temporal Fracture #010',
  narrativeDescription: 'Chrono-anomaly index 10 has warped the timeline inside Sector 10. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 2000,
  goldReward: 700,
  objectives: [
    { id: 'obj_10_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_10_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
