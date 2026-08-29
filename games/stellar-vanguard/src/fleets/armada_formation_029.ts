// Stellar Vanguard Armada Formation #029
export interface FleetDoctrineSpec_29 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_29: FleetDoctrineSpec_29 = {
  doctrineId: 'doctrine_vanguard_029',
  doctrineName: 'Battle Group Armada #029',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 28,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_29'
};
