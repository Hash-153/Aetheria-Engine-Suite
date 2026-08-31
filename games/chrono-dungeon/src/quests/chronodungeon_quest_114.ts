// ChronoDungeon Epic Questline #114
export interface QuestlineDefinition_114 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_114: QuestlineDefinition_114 = {
  questId: 'quest_chrono_epoch_114',
  questTitle: 'The Temporal Fracture #114',
  narrativeDescription: 'Chrono-anomaly index 114 has warped the timeline inside Sector 114. Restore temporal stability before the collapse.',
  requiredLevel: 12,
  experienceReward: 17600,
  goldReward: 5900,
  objectives: [
    { id: 'obj_114_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_114_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
