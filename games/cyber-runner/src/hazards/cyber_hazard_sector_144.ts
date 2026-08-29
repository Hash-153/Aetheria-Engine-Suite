// CyberRunner Cyber Sector Hazards #144
export interface CyberHazardBlock_144 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_144: CyberHazardBlock_144[] = [
  {
    blockId: 'hazard_144_A',
    x: 480,
    y: 440,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 313,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_144_B',
    x: 380,
    y: 302,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 323,
    cycleTime: 3.0
  }
];
