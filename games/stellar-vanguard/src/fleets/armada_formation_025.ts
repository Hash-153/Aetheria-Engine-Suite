// Stellar Vanguard Armada Formation #025
export interface FleetDoctrineSpec_25 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_25: FleetDoctrineSpec_25 = {
  doctrineId: 'doctrine_vanguard_025',
  doctrineName: 'Battle Group Armada #025',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_25'
};
