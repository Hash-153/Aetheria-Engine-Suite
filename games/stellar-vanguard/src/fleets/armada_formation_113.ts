// Stellar Vanguard Armada Formation #113
export interface FleetDoctrineSpec_113 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_113: FleetDoctrineSpec_113 = {
  doctrineId: 'doctrine_vanguard_113',
  doctrineName: 'Battle Group Armada #113',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 36,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_113'
};
