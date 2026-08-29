// ChronoDungeon Epic Questline #134
export interface QuestlineDefinition_134 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_134: QuestlineDefinition_134 = {
  questId: 'quest_chrono_epoch_134',
  questTitle: 'The Temporal Fracture #134',
  narrativeDescription: 'Chrono-anomaly index 134 has warped the timeline inside Sector 134. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 20600,
  goldReward: 6900,
  objectives: [
    { id: 'obj_134_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_134_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
