// CyberRunner Cyber Sector Hazards #062
export interface CyberHazardBlock_62 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_62: CyberHazardBlock_62[] = [
  {
    blockId: 'hazard_62_A',
    x: 450,
    y: 220,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 149,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_62_B',
    x: 340,
    y: 396,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 159,
    cycleTime: 4.0
  }
];
