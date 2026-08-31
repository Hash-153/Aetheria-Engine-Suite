// CyberRunner Cyber Sector Hazards #015
export interface CyberHazardBlock_15 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_15: CyberHazardBlock_15[] = [
  {
    blockId: 'hazard_15_A',
    x: 345,
    y: 350,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 55,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_15_B',
    x: 600,
    y: 270,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 65,
    cycleTime: 4.5
  }
];
