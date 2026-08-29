// ChronoDungeon Epic Questline #017
export interface QuestlineDefinition_17 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_17: QuestlineDefinition_17 = {
  questId: 'quest_chrono_epoch_017',
  questTitle: 'The Temporal Fracture #017',
  narrativeDescription: 'Chrono-anomaly index 17 has warped the timeline inside Sector 17. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 3050,
  goldReward: 1050,
  objectives: [
    { id: 'obj_17_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_17_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
