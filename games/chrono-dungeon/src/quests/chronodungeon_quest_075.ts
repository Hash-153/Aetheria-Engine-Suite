// ChronoDungeon Epic Questline #075
export interface QuestlineDefinition_75 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_75: QuestlineDefinition_75 = {
  questId: 'quest_chrono_epoch_075',
  questTitle: 'The Temporal Fracture #075',
  narrativeDescription: 'Chrono-anomaly index 75 has warped the timeline inside Sector 75. Restore temporal stability before the collapse.',
  requiredLevel: 8,
  experienceReward: 11750,
  goldReward: 3950,
  objectives: [
    { id: 'obj_75_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_75_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
