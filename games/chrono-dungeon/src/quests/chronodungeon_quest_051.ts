// ChronoDungeon Epic Questline #051
export interface QuestlineDefinition_51 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_51: QuestlineDefinition_51 = {
  questId: 'quest_chrono_epoch_051',
  questTitle: 'The Temporal Fracture #051',
  narrativeDescription: 'Chrono-anomaly index 51 has warped the timeline inside Sector 51. Restore temporal stability before the collapse.',
  requiredLevel: 6,
  experienceReward: 8150,
  goldReward: 2750,
  objectives: [
    { id: 'obj_51_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_51_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
