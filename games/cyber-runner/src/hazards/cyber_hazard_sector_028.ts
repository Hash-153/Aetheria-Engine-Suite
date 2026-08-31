// CyberRunner Cyber Sector Hazards #028
export interface CyberHazardBlock_28 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_28: CyberHazardBlock_28[] = [
  {
    blockId: 'hazard_28_A',
    x: 540,
    y: 480,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 81,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_28_B',
    x: 460,
    y: 374,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 91,
    cycleTime: 3.0
  }
];
