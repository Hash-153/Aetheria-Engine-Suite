// CyberRunner Cyber Sector Hazards #048
export interface CyberHazardBlock_48 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_48: CyberHazardBlock_48[] = [
  {
    blockId: 'hazard_48_A',
    x: 240,
    y: 380,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 121,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_48_B',
    x: 460,
    y: 284,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 131,
    cycleTime: 3.0
  }
];
