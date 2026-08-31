// ChronoDungeon Epic Questline #124
export interface QuestlineDefinition_124 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_124: QuestlineDefinition_124 = {
  questId: 'quest_chrono_epoch_124',
  questTitle: 'The Temporal Fracture #124',
  narrativeDescription: 'Chrono-anomaly index 124 has warped the timeline inside Sector 124. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 19100,
  goldReward: 6400,
  objectives: [
    { id: 'obj_124_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_124_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
