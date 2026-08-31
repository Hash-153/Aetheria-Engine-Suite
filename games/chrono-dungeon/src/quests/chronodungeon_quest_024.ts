// ChronoDungeon Epic Questline #024
export interface QuestlineDefinition_24 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_24: QuestlineDefinition_24 = {
  questId: 'quest_chrono_epoch_024',
  questTitle: 'The Temporal Fracture #024',
  narrativeDescription: 'Chrono-anomaly index 24 has warped the timeline inside Sector 24. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 4100,
  goldReward: 1400,
  objectives: [
    { id: 'obj_24_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_24_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
