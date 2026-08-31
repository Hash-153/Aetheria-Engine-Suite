// ChronoDungeon Epic Questline #001
export interface QuestlineDefinition_1 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_1: QuestlineDefinition_1 = {
  questId: 'quest_chrono_epoch_001',
  questTitle: 'The Temporal Fracture #001',
  narrativeDescription: 'Chrono-anomaly index 1 has warped the timeline inside Sector 1. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 650,
  goldReward: 250,
  objectives: [
    { id: 'obj_1_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_1_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
