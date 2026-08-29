// ChronoDungeon Epic Questline #100
export interface QuestlineDefinition_100 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_100: QuestlineDefinition_100 = {
  questId: 'quest_chrono_epoch_100',
  questTitle: 'The Temporal Fracture #100',
  narrativeDescription: 'Chrono-anomaly index 100 has warped the timeline inside Sector 100. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 15500,
  goldReward: 5200,
  objectives: [
    { id: 'obj_100_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_100_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
