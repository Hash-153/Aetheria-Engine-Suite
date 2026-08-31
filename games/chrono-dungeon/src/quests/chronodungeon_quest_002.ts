// ChronoDungeon Epic Questline #002
export interface QuestlineDefinition_2 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_2: QuestlineDefinition_2 = {
  questId: 'quest_chrono_epoch_002',
  questTitle: 'The Temporal Fracture #002',
  narrativeDescription: 'Chrono-anomaly index 2 has warped the timeline inside Sector 2. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 800,
  goldReward: 300,
  objectives: [
    { id: 'obj_2_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_2_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
