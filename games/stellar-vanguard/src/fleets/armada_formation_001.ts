// Stellar Vanguard Armada Formation #001
export interface FleetDoctrineSpec_1 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_1: FleetDoctrineSpec_1 = {
  doctrineId: 'doctrine_vanguard_001',
  doctrineName: 'Battle Group Armada #001',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_1'
};
