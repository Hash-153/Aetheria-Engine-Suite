// Stellar Vanguard Armada Formation #101
export interface FleetDoctrineSpec_101 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_101: FleetDoctrineSpec_101 = {
  doctrineId: 'doctrine_vanguard_101',
  doctrineName: 'Battle Group Armada #101',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_101'
};
