// ChronoDungeon Epic Questline #149
export interface QuestlineDefinition_149 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_149: QuestlineDefinition_149 = {
  questId: 'quest_chrono_epoch_149',
  questTitle: 'The Temporal Fracture #149',
  narrativeDescription: 'Chrono-anomaly index 149 has warped the timeline inside Sector 149. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 22850,
  goldReward: 7650,
  objectives: [
    { id: 'obj_149_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_149_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
