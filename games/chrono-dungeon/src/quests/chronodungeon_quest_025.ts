// ChronoDungeon Epic Questline #025
export interface QuestlineDefinition_25 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_25: QuestlineDefinition_25 = {
  questId: 'quest_chrono_epoch_025',
  questTitle: 'The Temporal Fracture #025',
  narrativeDescription: 'Chrono-anomaly index 25 has warped the timeline inside Sector 25. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 4250,
  goldReward: 1450,
  objectives: [
    { id: 'obj_25_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_25_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
