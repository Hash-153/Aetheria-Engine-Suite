// ChronoDungeon Epic Questline #083
export interface QuestlineDefinition_83 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_83: QuestlineDefinition_83 = {
  questId: 'quest_chrono_epoch_083',
  questTitle: 'The Temporal Fracture #083',
  narrativeDescription: 'Chrono-anomaly index 83 has warped the timeline inside Sector 83. Restore temporal stability before the collapse.',
  requiredLevel: 9,
  experienceReward: 12950,
  goldReward: 4350,
  objectives: [
    { id: 'obj_83_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_83_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
