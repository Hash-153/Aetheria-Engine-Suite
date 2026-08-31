// CyberRunner Cyber Sector Hazards #056
export interface CyberHazardBlock_56 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_56: CyberHazardBlock_56[] = [
  {
    blockId: 'hazard_56_A',
    x: 360,
    y: 460,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 137,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_56_B',
    x: 620,
    y: 348,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 147,
    cycleTime: 3.0
  }
];
