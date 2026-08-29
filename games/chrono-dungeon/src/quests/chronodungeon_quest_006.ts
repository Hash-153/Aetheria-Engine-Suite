// ChronoDungeon Epic Questline #006
export interface QuestlineDefinition_6 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_6: QuestlineDefinition_6 = {
  questId: 'quest_chrono_epoch_006',
  questTitle: 'The Temporal Fracture #006',
  narrativeDescription: 'Chrono-anomaly index 6 has warped the timeline inside Sector 6. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 1400,
  goldReward: 500,
  objectives: [
    { id: 'obj_6_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_6_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
