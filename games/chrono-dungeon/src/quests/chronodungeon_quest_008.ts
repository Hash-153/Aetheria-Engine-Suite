// ChronoDungeon Epic Questline #008
export interface QuestlineDefinition_8 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_8: QuestlineDefinition_8 = {
  questId: 'quest_chrono_epoch_008',
  questTitle: 'The Temporal Fracture #008',
  narrativeDescription: 'Chrono-anomaly index 8 has warped the timeline inside Sector 8. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 1700,
  goldReward: 600,
  objectives: [
    { id: 'obj_8_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_8_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
