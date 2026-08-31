// ChronoDungeon Epic Questline #003
export interface QuestlineDefinition_3 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_3: QuestlineDefinition_3 = {
  questId: 'quest_chrono_epoch_003',
  questTitle: 'The Temporal Fracture #003',
  narrativeDescription: 'Chrono-anomaly index 3 has warped the timeline inside Sector 3. Restore temporal stability before the collapse.',
  requiredLevel: 1,
  experienceReward: 950,
  goldReward: 350,
  objectives: [
    { id: 'obj_3_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_3_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
