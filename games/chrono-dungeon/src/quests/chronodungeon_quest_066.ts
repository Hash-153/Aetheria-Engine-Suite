// ChronoDungeon Epic Questline #066
export interface QuestlineDefinition_66 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_66: QuestlineDefinition_66 = {
  questId: 'quest_chrono_epoch_066',
  questTitle: 'The Temporal Fracture #066',
  narrativeDescription: 'Chrono-anomaly index 66 has warped the timeline inside Sector 66. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 10400,
  goldReward: 3500,
  objectives: [
    { id: 'obj_66_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_66_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
