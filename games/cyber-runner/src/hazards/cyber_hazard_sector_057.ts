// CyberRunner Cyber Sector Hazards #057
export interface CyberHazardBlock_57 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_57: CyberHazardBlock_57[] = [
  {
    blockId: 'hazard_57_A',
    x: 375,
    y: 470,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 139,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_57_B',
    x: 640,
    y: 356,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 149,
    cycleTime: 3.5
  }
];
