// ChronoDungeon Epic Questline #137
export interface QuestlineDefinition_137 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_137: QuestlineDefinition_137 = {
  questId: 'quest_chrono_epoch_137',
  questTitle: 'The Temporal Fracture #137',
  narrativeDescription: 'Chrono-anomaly index 137 has warped the timeline inside Sector 137. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 21050,
  goldReward: 7050,
  objectives: [
    { id: 'obj_137_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_137_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
