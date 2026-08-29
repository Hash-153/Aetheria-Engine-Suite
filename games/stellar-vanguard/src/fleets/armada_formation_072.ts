// Stellar Vanguard Armada Formation #072
export interface FleetDoctrineSpec_72 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_72: FleetDoctrineSpec_72 = {
  doctrineId: 'doctrine_vanguard_072',
  doctrineName: 'Battle Group Armada #072',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 34,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_72'
};
