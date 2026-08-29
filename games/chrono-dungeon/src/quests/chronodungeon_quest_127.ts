// ChronoDungeon Epic Questline #127
export interface QuestlineDefinition_127 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_127: QuestlineDefinition_127 = {
  questId: 'quest_chrono_epoch_127',
  questTitle: 'The Temporal Fracture #127',
  narrativeDescription: 'Chrono-anomaly index 127 has warped the timeline inside Sector 127. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 19550,
  goldReward: 6550,
  objectives: [
    { id: 'obj_127_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_127_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
