// ChronoDungeon Epic Questline #098
export interface QuestlineDefinition_98 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_98: QuestlineDefinition_98 = {
  questId: 'quest_chrono_epoch_098',
  questTitle: 'The Temporal Fracture #098',
  narrativeDescription: 'Chrono-anomaly index 98 has warped the timeline inside Sector 98. Restore temporal stability before the collapse.',
  requiredLevel: 10,
  experienceReward: 15200,
  goldReward: 5100,
  objectives: [
    { id: 'obj_98_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_98_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
