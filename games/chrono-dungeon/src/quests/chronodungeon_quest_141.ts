// ChronoDungeon Epic Questline #141
export interface QuestlineDefinition_141 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_141: QuestlineDefinition_141 = {
  questId: 'quest_chrono_epoch_141',
  questTitle: 'The Temporal Fracture #141',
  narrativeDescription: 'Chrono-anomaly index 141 has warped the timeline inside Sector 141. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 21650,
  goldReward: 7250,
  objectives: [
    { id: 'obj_141_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_141_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
