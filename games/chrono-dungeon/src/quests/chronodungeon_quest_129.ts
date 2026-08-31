// ChronoDungeon Epic Questline #129
export interface QuestlineDefinition_129 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_129: QuestlineDefinition_129 = {
  questId: 'quest_chrono_epoch_129',
  questTitle: 'The Temporal Fracture #129',
  narrativeDescription: 'Chrono-anomaly index 129 has warped the timeline inside Sector 129. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 19850,
  goldReward: 6650,
  objectives: [
    { id: 'obj_129_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_129_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
