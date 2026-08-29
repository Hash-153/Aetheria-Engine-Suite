// ChronoDungeon Epic Questline #040
export interface QuestlineDefinition_40 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_40: QuestlineDefinition_40 = {
  questId: 'quest_chrono_epoch_040',
  questTitle: 'The Temporal Fracture #040',
  narrativeDescription: 'Chrono-anomaly index 40 has warped the timeline inside Sector 40. Restore temporal stability before the collapse.',
  requiredLevel: 5,
  experienceReward: 6500,
  goldReward: 2200,
  objectives: [
    { id: 'obj_40_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_40_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
