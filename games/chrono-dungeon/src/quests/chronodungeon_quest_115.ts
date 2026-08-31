// ChronoDungeon Epic Questline #115
export interface QuestlineDefinition_115 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_115: QuestlineDefinition_115 = {
  questId: 'quest_chrono_epoch_115',
  questTitle: 'The Temporal Fracture #115',
  narrativeDescription: 'Chrono-anomaly index 115 has warped the timeline inside Sector 115. Restore temporal stability before the collapse.',
  requiredLevel: 12,
  experienceReward: 17750,
  goldReward: 5950,
  objectives: [
    { id: 'obj_115_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_115_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
