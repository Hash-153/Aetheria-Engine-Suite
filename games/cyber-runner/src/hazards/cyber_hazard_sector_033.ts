// CyberRunner Cyber Sector Hazards #033
export interface CyberHazardBlock_33 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_33: CyberHazardBlock_33[] = [
  {
    blockId: 'hazard_33_A',
    x: 615,
    y: 230,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 91,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_33_B',
    x: 560,
    y: 164,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 101,
    cycleTime: 3.5
  }
];
