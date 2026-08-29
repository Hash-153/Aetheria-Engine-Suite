// Stellar Vanguard Armada Formation #017
export interface FleetDoctrineSpec_17 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_17: FleetDoctrineSpec_17 = {
  doctrineId: 'doctrine_vanguard_017',
  doctrineName: 'Battle Group Armada #017',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_17'
};
