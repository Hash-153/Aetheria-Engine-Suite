// ChronoDungeon Epic Questline #005
export interface QuestlineDefinition_5 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_5: QuestlineDefinition_5 = {
  questId: 'quest_chrono_epoch_005',
  questTitle: 'The Temporal Fracture #005',
  narrativeDescription: 'Chrono-anomaly index 5 has warped the timeline inside Sector 5. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 1250,
  goldReward: 450,
  objectives: [
    { id: 'obj_5_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_5_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
