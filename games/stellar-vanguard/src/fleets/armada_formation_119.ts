// Stellar Vanguard Armada Formation #119
export interface FleetDoctrineSpec_119 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_119: FleetDoctrineSpec_119 = {
  doctrineId: 'doctrine_vanguard_119',
  doctrineName: 'Battle Group Armada #119',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 48,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_119'
};
