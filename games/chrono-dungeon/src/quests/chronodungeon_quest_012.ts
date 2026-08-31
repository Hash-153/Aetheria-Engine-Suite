// ChronoDungeon Epic Questline #012
export interface QuestlineDefinition_12 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_12: QuestlineDefinition_12 = {
  questId: 'quest_chrono_epoch_012',
  questTitle: 'The Temporal Fracture #012',
  narrativeDescription: 'Chrono-anomaly index 12 has warped the timeline inside Sector 12. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 2300,
  goldReward: 800,
  objectives: [
    { id: 'obj_12_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_12_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
