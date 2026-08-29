// ChronoDungeon Epic Questline #021
export interface QuestlineDefinition_21 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_21: QuestlineDefinition_21 = {
  questId: 'quest_chrono_epoch_021',
  questTitle: 'The Temporal Fracture #021',
  narrativeDescription: 'Chrono-anomaly index 21 has warped the timeline inside Sector 21. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 3650,
  goldReward: 1250,
  objectives: [
    { id: 'obj_21_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_21_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
