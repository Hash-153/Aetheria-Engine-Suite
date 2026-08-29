// ChronoDungeon Epic Questline #022
export interface QuestlineDefinition_22 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_22: QuestlineDefinition_22 = {
  questId: 'quest_chrono_epoch_022',
  questTitle: 'The Temporal Fracture #022',
  narrativeDescription: 'Chrono-anomaly index 22 has warped the timeline inside Sector 22. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 3800,
  goldReward: 1300,
  objectives: [
    { id: 'obj_22_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_22_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
