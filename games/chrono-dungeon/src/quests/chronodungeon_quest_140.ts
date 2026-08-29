// ChronoDungeon Epic Questline #140
export interface QuestlineDefinition_140 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_140: QuestlineDefinition_140 = {
  questId: 'quest_chrono_epoch_140',
  questTitle: 'The Temporal Fracture #140',
  narrativeDescription: 'Chrono-anomaly index 140 has warped the timeline inside Sector 140. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 21500,
  goldReward: 7200,
  objectives: [
    { id: 'obj_140_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_140_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
