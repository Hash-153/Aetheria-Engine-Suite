// ChronoDungeon Epic Questline #071
export interface QuestlineDefinition_71 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_71: QuestlineDefinition_71 = {
  questId: 'quest_chrono_epoch_071',
  questTitle: 'The Temporal Fracture #071',
  narrativeDescription: 'Chrono-anomaly index 71 has warped the timeline inside Sector 71. Restore temporal stability before the collapse.',
  requiredLevel: 8,
  experienceReward: 11150,
  goldReward: 3750,
  objectives: [
    { id: 'obj_71_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_71_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
