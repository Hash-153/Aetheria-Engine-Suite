// ChronoDungeon Epic Questline #004
export interface QuestlineDefinition_4 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_4: QuestlineDefinition_4 = {
  questId: 'quest_chrono_epoch_004',
  questTitle: 'The Temporal Fracture #004',
  narrativeDescription: 'Chrono-anomaly index 4 has warped the timeline inside Sector 4. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 1100,
  goldReward: 400,
  objectives: [
    { id: 'obj_4_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_4_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
