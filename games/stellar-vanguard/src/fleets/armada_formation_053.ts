// Stellar Vanguard Armada Formation #053
export interface FleetDoctrineSpec_53 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_53: FleetDoctrineSpec_53 = {
  doctrineId: 'doctrine_vanguard_053',
  doctrineName: 'Battle Group Armada #053',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 36,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_53'
};
