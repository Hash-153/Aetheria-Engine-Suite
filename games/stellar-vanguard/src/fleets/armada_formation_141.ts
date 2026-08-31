// Stellar Vanguard Armada Formation #141
export interface FleetDoctrineSpec_141 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_141: FleetDoctrineSpec_141 = {
  doctrineId: 'doctrine_vanguard_141',
  doctrineName: 'Battle Group Armada #141',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_141'
};
