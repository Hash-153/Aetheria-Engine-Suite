// ChronoDungeon Epic Questline #147
export interface QuestlineDefinition_147 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_147: QuestlineDefinition_147 = {
  questId: 'quest_chrono_epoch_147',
  questTitle: 'The Temporal Fracture #147',
  narrativeDescription: 'Chrono-anomaly index 147 has warped the timeline inside Sector 147. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 22550,
  goldReward: 7550,
  objectives: [
    { id: 'obj_147_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_147_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
