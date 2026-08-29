// CyberRunner Cyber Sector Hazards #006
export interface CyberHazardBlock_6 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_6: CyberHazardBlock_6[] = [
  {
    blockId: 'hazard_6_A',
    x: 210,
    y: 260,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 37,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_6_B',
    x: 420,
    y: 198,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 47,
    cycleTime: 4.0
  }
];
