// ChronoDungeon Epic Questline #139
export interface QuestlineDefinition_139 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_139: QuestlineDefinition_139 = {
  questId: 'quest_chrono_epoch_139',
  questTitle: 'The Temporal Fracture #139',
  narrativeDescription: 'Chrono-anomaly index 139 has warped the timeline inside Sector 139. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 21350,
  goldReward: 7150,
  objectives: [
    { id: 'obj_139_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_139_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
