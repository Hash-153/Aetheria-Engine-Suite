// ChronoDungeon Epic Questline #014
export interface QuestlineDefinition_14 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_14: QuestlineDefinition_14 = {
  questId: 'quest_chrono_epoch_014',
  questTitle: 'The Temporal Fracture #014',
  narrativeDescription: 'Chrono-anomaly index 14 has warped the timeline inside Sector 14. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 2600,
  goldReward: 900,
  objectives: [
    { id: 'obj_14_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_14_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
