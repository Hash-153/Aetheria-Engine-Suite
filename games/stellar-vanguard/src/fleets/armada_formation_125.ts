// Stellar Vanguard Armada Formation #125
export interface FleetDoctrineSpec_125 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_125: FleetDoctrineSpec_125 = {
  doctrineId: 'doctrine_vanguard_125',
  doctrineName: 'Battle Group Armada #125',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_125'
};
