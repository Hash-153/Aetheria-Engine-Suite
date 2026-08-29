// ChronoDungeon Epic Questline #103
export interface QuestlineDefinition_103 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_103: QuestlineDefinition_103 = {
  questId: 'quest_chrono_epoch_103',
  questTitle: 'The Temporal Fracture #103',
  narrativeDescription: 'Chrono-anomaly index 103 has warped the timeline inside Sector 103. Restore temporal stability before the collapse.',
  requiredLevel: 11,
  experienceReward: 15950,
  goldReward: 5350,
  objectives: [
    { id: 'obj_103_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_103_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
