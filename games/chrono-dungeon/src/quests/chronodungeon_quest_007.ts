// ChronoDungeon Epic Questline #007
export interface QuestlineDefinition_7 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_7: QuestlineDefinition_7 = {
  questId: 'quest_chrono_epoch_007',
  questTitle: 'The Temporal Fracture #007',
  narrativeDescription: 'Chrono-anomaly index 7 has warped the timeline inside Sector 7. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 1550,
  goldReward: 550,
  objectives: [
    { id: 'obj_7_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_7_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
