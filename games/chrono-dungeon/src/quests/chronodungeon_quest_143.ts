// ChronoDungeon Epic Questline #143
export interface QuestlineDefinition_143 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_143: QuestlineDefinition_143 = {
  questId: 'quest_chrono_epoch_143',
  questTitle: 'The Temporal Fracture #143',
  narrativeDescription: 'Chrono-anomaly index 143 has warped the timeline inside Sector 143. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 21950,
  goldReward: 7350,
  objectives: [
    { id: 'obj_143_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_143_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
