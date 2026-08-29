// Stellar Vanguard Armada Formation #057
export interface FleetDoctrineSpec_57 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_57: FleetDoctrineSpec_57 = {
  doctrineId: 'doctrine_vanguard_057',
  doctrineName: 'Battle Group Armada #057',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_57'
};
