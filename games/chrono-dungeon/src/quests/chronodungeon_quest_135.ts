// ChronoDungeon Epic Questline #135
export interface QuestlineDefinition_135 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_135: QuestlineDefinition_135 = {
  questId: 'quest_chrono_epoch_135',
  questTitle: 'The Temporal Fracture #135',
  narrativeDescription: 'Chrono-anomaly index 135 has warped the timeline inside Sector 135. Restore temporal stability before the collapse.',
  requiredLevel: 14,
  experienceReward: 20750,
  goldReward: 6950,
  objectives: [
    { id: 'obj_135_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_135_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
