// ChronoDungeon Epic Questline #009
export interface QuestlineDefinition_9 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_9: QuestlineDefinition_9 = {
  questId: 'quest_chrono_epoch_009',
  questTitle: 'The Temporal Fracture #009',
  narrativeDescription: 'Chrono-anomaly index 9 has warped the timeline inside Sector 9. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 1850,
  goldReward: 650,
  objectives: [
    { id: 'obj_9_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_9_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
