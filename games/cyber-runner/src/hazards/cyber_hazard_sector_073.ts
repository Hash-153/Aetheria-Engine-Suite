// CyberRunner Cyber Sector Hazards #073
export interface CyberHazardBlock_73 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_73: CyberHazardBlock_73[] = [
  {
    blockId: 'hazard_73_A',
    x: 615,
    y: 330,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 171,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_73_B',
    x: 560,
    y: 234,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 181,
    cycleTime: 3.5
  }
];
