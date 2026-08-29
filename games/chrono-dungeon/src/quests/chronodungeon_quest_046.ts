// ChronoDungeon Epic Questline #046
export interface QuestlineDefinition_46 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_46: QuestlineDefinition_46 = {
  questId: 'quest_chrono_epoch_046',
  questTitle: 'The Temporal Fracture #046',
  narrativeDescription: 'Chrono-anomaly index 46 has warped the timeline inside Sector 46. Restore temporal stability before the collapse.',
  requiredLevel: 5,
  experienceReward: 7400,
  goldReward: 2500,
  objectives: [
    { id: 'obj_46_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_46_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
