// Stellar Vanguard Armada Formation #116
export interface FleetDoctrineSpec_116 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_116: FleetDoctrineSpec_116 = {
  doctrineId: 'doctrine_vanguard_116',
  doctrineName: 'Battle Group Armada #116',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_116'
};
