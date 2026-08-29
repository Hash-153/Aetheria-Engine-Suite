// ChronoDungeon Epic Questline #126
export interface QuestlineDefinition_126 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_126: QuestlineDefinition_126 = {
  questId: 'quest_chrono_epoch_126',
  questTitle: 'The Temporal Fracture #126',
  narrativeDescription: 'Chrono-anomaly index 126 has warped the timeline inside Sector 126. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 19400,
  goldReward: 6500,
  objectives: [
    { id: 'obj_126_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_126_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
