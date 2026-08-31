// Stellar Vanguard Armada Formation #077
export interface FleetDoctrineSpec_77 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_77: FleetDoctrineSpec_77 = {
  doctrineId: 'doctrine_vanguard_077',
  doctrineName: 'Battle Group Armada #077',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_77'
};
