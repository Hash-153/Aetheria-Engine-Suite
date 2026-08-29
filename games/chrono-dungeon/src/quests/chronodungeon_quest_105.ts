// ChronoDungeon Epic Questline #105
export interface QuestlineDefinition_105 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_105: QuestlineDefinition_105 = {
  questId: 'quest_chrono_epoch_105',
  questTitle: 'The Temporal Fracture #105',
  narrativeDescription: 'Chrono-anomaly index 105 has warped the timeline inside Sector 105. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 16250,
  goldReward: 5450,
  objectives: [
    { id: 'obj_105_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_105_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
