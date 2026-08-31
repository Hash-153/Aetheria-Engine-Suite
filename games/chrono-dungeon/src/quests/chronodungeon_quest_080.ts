// ChronoDungeon Epic Questline #080
export interface QuestlineDefinition_80 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_80: QuestlineDefinition_80 = {
  questId: 'quest_chrono_epoch_080',
  questTitle: 'The Temporal Fracture #080',
  narrativeDescription: 'Chrono-anomaly index 80 has warped the timeline inside Sector 80. Restore temporal stability before the collapse.',
  requiredLevel: 9,
  experienceReward: 12500,
  goldReward: 4200,
  objectives: [
    { id: 'obj_80_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_80_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
