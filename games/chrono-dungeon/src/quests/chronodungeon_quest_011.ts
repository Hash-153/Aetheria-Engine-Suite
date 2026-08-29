// ChronoDungeon Epic Questline #011
export interface QuestlineDefinition_11 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_11: QuestlineDefinition_11 = {
  questId: 'quest_chrono_epoch_011',
  questTitle: 'The Temporal Fracture #011',
  narrativeDescription: 'Chrono-anomaly index 11 has warped the timeline inside Sector 11. Restore temporal stability before the collapse.',
  requiredLevel: 2,
  experienceReward: 2150,
  goldReward: 750,
  objectives: [
    { id: 'obj_11_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_11_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
