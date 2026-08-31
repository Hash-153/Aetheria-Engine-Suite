// ChronoDungeon Epic Questline #041
export interface QuestlineDefinition_41 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_41: QuestlineDefinition_41 = {
  questId: 'quest_chrono_epoch_041',
  questTitle: 'The Temporal Fracture #041',
  narrativeDescription: 'Chrono-anomaly index 41 has warped the timeline inside Sector 41. Restore temporal stability before the collapse.',
  requiredLevel: 5,
  experienceReward: 6650,
  goldReward: 2250,
  objectives: [
    { id: 'obj_41_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_41_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
