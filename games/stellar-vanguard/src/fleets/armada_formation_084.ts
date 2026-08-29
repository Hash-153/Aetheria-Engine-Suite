// Stellar Vanguard Armada Formation #084
export interface FleetDoctrineSpec_84 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_84: FleetDoctrineSpec_84 = {
  doctrineId: 'doctrine_vanguard_084',
  doctrineName: 'Battle Group Armada #084',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 18,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_84'
};
