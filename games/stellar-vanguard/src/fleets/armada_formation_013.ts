// Stellar Vanguard Armada Formation #013
export interface FleetDoctrineSpec_13 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_13: FleetDoctrineSpec_13 = {
  doctrineId: 'doctrine_vanguard_013',
  doctrineName: 'Battle Group Armada #013',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 36,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_13'
};
