// ChronoDungeon Epic Questline #081
export interface QuestlineDefinition_81 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_81: QuestlineDefinition_81 = {
  questId: 'quest_chrono_epoch_081',
  questTitle: 'The Temporal Fracture #081',
  narrativeDescription: 'Chrono-anomaly index 81 has warped the timeline inside Sector 81. Restore temporal stability before the collapse.',
  requiredLevel: 9,
  experienceReward: 12650,
  goldReward: 4250,
  objectives: [
    { id: 'obj_81_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_81_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
