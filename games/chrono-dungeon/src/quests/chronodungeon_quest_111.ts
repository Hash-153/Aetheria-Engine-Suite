// ChronoDungeon Epic Questline #111
export interface QuestlineDefinition_111 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_111: QuestlineDefinition_111 = {
  questId: 'quest_chrono_epoch_111',
  questTitle: 'The Temporal Fracture #111',
  narrativeDescription: 'Chrono-anomaly index 111 has warped the timeline inside Sector 111. Restore temporal stability before the collapse.',
  requiredLevel: 12,
  experienceReward: 17150,
  goldReward: 5750,
  objectives: [
    { id: 'obj_111_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_111_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
