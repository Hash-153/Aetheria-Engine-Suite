// CyberRunner Cyber Sector Hazards #117
export interface CyberHazardBlock_117 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_117: CyberHazardBlock_117[] = [
  {
    blockId: 'hazard_117_A',
    x: 675,
    y: 470,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 259,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_117_B',
    x: 640,
    y: 336,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 269,
    cycleTime: 3.5
  }
];
