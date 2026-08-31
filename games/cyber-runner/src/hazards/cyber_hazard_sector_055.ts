// CyberRunner Cyber Sector Hazards #055
export interface CyberHazardBlock_55 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_55: CyberHazardBlock_55[] = [
  {
    blockId: 'hazard_55_A',
    x: 345,
    y: 450,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 135,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_55_B',
    x: 600,
    y: 340,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 145,
    cycleTime: 4.5
  }
];
