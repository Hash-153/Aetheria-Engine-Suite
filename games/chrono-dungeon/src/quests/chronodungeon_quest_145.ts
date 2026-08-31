// ChronoDungeon Epic Questline #145
export interface QuestlineDefinition_145 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_145: QuestlineDefinition_145 = {
  questId: 'quest_chrono_epoch_145',
  questTitle: 'The Temporal Fracture #145',
  narrativeDescription: 'Chrono-anomaly index 145 has warped the timeline inside Sector 145. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 22250,
  goldReward: 7450,
  objectives: [
    { id: 'obj_145_1', text: 'Slay Temporal Stalkers', count: 3 },
    { id: 'obj_145_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
