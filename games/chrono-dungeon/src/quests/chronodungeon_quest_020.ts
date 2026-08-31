// ChronoDungeon Epic Questline #020
export interface QuestlineDefinition_20 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_20: QuestlineDefinition_20 = {
  questId: 'quest_chrono_epoch_020',
  questTitle: 'The Temporal Fracture #020',
  narrativeDescription: 'Chrono-anomaly index 20 has warped the timeline inside Sector 20. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 3500,
  goldReward: 1200,
  objectives: [
    { id: 'obj_20_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_20_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
