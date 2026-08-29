// CyberRunner Cyber Sector Hazards #037
export interface CyberHazardBlock_37 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_37: CyberHazardBlock_37[] = [
  {
    blockId: 'hazard_37_A',
    x: 675,
    y: 270,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 99,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_37_B',
    x: 640,
    y: 196,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 109,
    cycleTime: 3.5
  }
];
