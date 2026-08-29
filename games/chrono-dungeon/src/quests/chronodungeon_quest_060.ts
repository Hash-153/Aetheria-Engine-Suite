// ChronoDungeon Epic Questline #060
export interface QuestlineDefinition_60 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_60: QuestlineDefinition_60 = {
  questId: 'quest_chrono_epoch_060',
  questTitle: 'The Temporal Fracture #060',
  narrativeDescription: 'Chrono-anomaly index 60 has warped the timeline inside Sector 60. Restore temporal stability before the collapse.',
  requiredLevel: 7,
  experienceReward: 9500,
  goldReward: 3200,
  objectives: [
    { id: 'obj_60_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_60_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
