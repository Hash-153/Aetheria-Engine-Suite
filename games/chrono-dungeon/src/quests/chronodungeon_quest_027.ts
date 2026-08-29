// ChronoDungeon Epic Questline #027
export interface QuestlineDefinition_27 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_27: QuestlineDefinition_27 = {
  questId: 'quest_chrono_epoch_027',
  questTitle: 'The Temporal Fracture #027',
  narrativeDescription: 'Chrono-anomaly index 27 has warped the timeline inside Sector 27. Restore temporal stability before the collapse.',
  requiredLevel: 3,
  experienceReward: 4550,
  goldReward: 1550,
  objectives: [
    { id: 'obj_27_1', text: 'Slay Temporal Stalkers', count: 5 },
    { id: 'obj_27_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
