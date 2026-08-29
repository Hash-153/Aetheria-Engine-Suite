// ChronoDungeon Epic Questline #026
export interface QuestlineDefinition_26 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_26: QuestlineDefinition_26 = {
  questId: 'quest_chrono_epoch_026',
  questTitle: 'The Temporal Fracture #026',
  narrativeDescription: 'Chrono-anomaly index 26 has warped the timeline inside Sector 26. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 4400,
  goldReward: 1500,
  objectives: [
    { id: 'obj_26_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_26_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
