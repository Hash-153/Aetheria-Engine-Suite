// Stellar Vanguard Armada Formation #096
export interface FleetDoctrineSpec_96 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_96: FleetDoctrineSpec_96 = {
  doctrineId: 'doctrine_vanguard_096',
  doctrineName: 'Battle Group Armada #096',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_96'
};
