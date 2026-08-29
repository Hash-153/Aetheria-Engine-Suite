// ChronoDungeon Epic Questline #028
export interface QuestlineDefinition_28 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_28: QuestlineDefinition_28 = {
  questId: 'quest_chrono_epoch_028',
  questTitle: 'The Temporal Fracture #028',
  narrativeDescription: 'Chrono-anomaly index 28 has warped the timeline inside Sector 28. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 4700,
  goldReward: 1600,
  objectives: [
    { id: 'obj_28_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_28_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
