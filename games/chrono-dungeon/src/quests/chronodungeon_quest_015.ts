// ChronoDungeon Epic Questline #015
export interface QuestlineDefinition_15 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_15: QuestlineDefinition_15 = {
  questId: 'quest_chrono_epoch_015',
  questTitle: 'The Temporal Fracture #015',
  narrativeDescription: 'Chrono-anomaly index 15 has warped the timeline inside Sector 15. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 2750,
  goldReward: 950,
  objectives: [
    { id: 'obj_15_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_15_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
