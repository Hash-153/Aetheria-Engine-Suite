// ChronoDungeon Epic Questline #142
export interface QuestlineDefinition_142 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_142: QuestlineDefinition_142 = {
  questId: 'quest_chrono_epoch_142',
  questTitle: 'The Temporal Fracture #142',
  narrativeDescription: 'Chrono-anomaly index 142 has warped the timeline inside Sector 142. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 21800,
  goldReward: 7300,
  objectives: [
    { id: 'obj_142_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_142_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
