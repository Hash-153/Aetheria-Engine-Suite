// ChronoDungeon Epic Questline #023
export interface QuestlineDefinition_23 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_23: QuestlineDefinition_23 = {
  questId: 'quest_chrono_epoch_023',
  questTitle: 'The Temporal Fracture #023',
  narrativeDescription: 'Chrono-anomaly index 23 has warped the timeline inside Sector 23. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 3950,
  goldReward: 1350,
  objectives: [
    { id: 'obj_23_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_23_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
