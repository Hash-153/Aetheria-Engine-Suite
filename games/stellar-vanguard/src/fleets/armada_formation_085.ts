// Stellar Vanguard Armada Formation #085
export interface FleetDoctrineSpec_85 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_85: FleetDoctrineSpec_85 = {
  doctrineId: 'doctrine_vanguard_085',
  doctrineName: 'Battle Group Armada #085',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_85'
};
