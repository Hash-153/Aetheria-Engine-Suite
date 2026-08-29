// ChronoDungeon Epic Questline #144
export interface QuestlineDefinition_144 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_144: QuestlineDefinition_144 = {
  questId: 'quest_chrono_epoch_144',
  questTitle: 'The Temporal Fracture #144',
  narrativeDescription: 'Chrono-anomaly index 144 has warped the timeline inside Sector 144. Restore temporal stability before the collapse.',
  requiredLevel: 15,
  experienceReward: 22100,
  goldReward: 7400,
  objectives: [
    { id: 'obj_144_1', text: 'Slay Temporal Stalkers', count: 7 },
    { id: 'obj_144_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
