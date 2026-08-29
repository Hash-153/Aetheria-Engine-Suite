// ChronoDungeon Epic Questline #148
export interface QuestlineDefinition_148 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_148: QuestlineDefinition_148 = {
  questId: 'quest_chrono_epoch_148',
  questTitle: 'The Temporal Fracture #148',
  narrativeDescription: 'Chrono-anomaly index 148 has warped the timeline inside Sector 148. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 22700,
  goldReward: 7600,
  objectives: [
    { id: 'obj_148_1', text: 'Slay Temporal Stalkers', count: 6 },
    { id: 'obj_148_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
