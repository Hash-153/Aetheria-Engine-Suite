// CyberRunner Cyber Sector Hazards #085
export interface CyberHazardBlock_85 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_85: CyberHazardBlock_85[] = [
  {
    blockId: 'hazard_85_A',
    x: 195,
    y: 450,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 195,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_85_B',
    x: 400,
    y: 330,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 205,
    cycleTime: 3.5
  }
];
