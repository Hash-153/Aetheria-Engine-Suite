// ChronoDungeon Epic Questline #121
export interface QuestlineDefinition_121 {
  questId: string;
  questTitle: string;
  narrativeDescription: string;
  requiredLevel: number;
  experienceReward: number;
  goldReward: number;
  objectives: Array<{ id: string; text: string; count: number }>;
}

export const QUESTLINE_DATA_121: QuestlineDefinition_121 = {
  questId: 'quest_chrono_epoch_121',
  questTitle: 'The Temporal Fracture #121',
  narrativeDescription: 'Chrono-anomaly index 121 has warped the timeline inside Sector 121. Restore temporal stability before the collapse.',
  requiredLevel: 13,
  experienceReward: 18650,
  goldReward: 6250,
  objectives: [
    { id: 'obj_121_1', text: 'Slay Temporal Stalkers', count: 4 },
    { id: 'obj_121_2', text: 'Stabilize Chrono Anchor', count: 1 }
  ]
};
