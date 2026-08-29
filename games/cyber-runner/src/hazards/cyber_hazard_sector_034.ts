// CyberRunner Cyber Sector Hazards #034
export interface CyberHazardBlock_34 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_34: CyberHazardBlock_34[] = [
  {
    blockId: 'hazard_34_A',
    x: 630,
    y: 240,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 93,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_34_B',
    x: 580,
    y: 172,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 103,
    cycleTime: 4.0
  }
];
