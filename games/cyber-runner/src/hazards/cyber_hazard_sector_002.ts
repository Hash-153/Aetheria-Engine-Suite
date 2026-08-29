// CyberRunner Cyber Sector Hazards #002
export interface CyberHazardBlock_2 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_2: CyberHazardBlock_2[] = [
  {
    blockId: 'hazard_2_A',
    x: 150,
    y: 220,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 29,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_2_B',
    x: 340,
    y: 166,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 39,
    cycleTime: 4.0
  }
];
