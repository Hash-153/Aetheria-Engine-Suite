// ChronoDungeon Epic Questline #150
export interface QuestlineDefinition_150 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_150: QuestlineDefinition_150 = {
  questId: 'quest_chrono_epoch_150',
  questTitle: 'The Temporal Fracture #150',
  narrativeDescription: 'Chrono-anomaly index 150 has warped the timeline inside Sector 150. Restore temporal stability before the collapse.',
  requiredLevel: 16,
  experienceReward: 23000,
  goldReward: 7700,
  objectives: [
    { id: 'obj_150_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_150_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
