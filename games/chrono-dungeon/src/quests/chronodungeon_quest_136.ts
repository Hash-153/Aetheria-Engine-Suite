// ChronoDungeon Epic Questline #136
export interface QuestlineDefinition_136 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_136: QuestlineDefinition_136 = {
  questId: 'quest_chrono_epoch_136',
  questTitle: 'The Temporal Fracture #136',
  narrativeDescription: 'Chrono-anomaly index 136 has warped the timeline inside Sector 136. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 20900,
  goldReward: 7000,
  objectives: [
    { id: 'obj_136_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_136_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
