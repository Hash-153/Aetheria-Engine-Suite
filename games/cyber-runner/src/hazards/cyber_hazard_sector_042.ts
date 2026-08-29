// CyberRunner Cyber Sector Hazards #042
export interface CyberHazardBlock_42 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_42: CyberHazardBlock_42[] = [
  {
    blockId: 'hazard_42_A',
    x: 150,
    y: 320,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 109,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_42_B',
    x: 340,
    y: 236,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 119,
    cycleTime: 4.0
  }
];
