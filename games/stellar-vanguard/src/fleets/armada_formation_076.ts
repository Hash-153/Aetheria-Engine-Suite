// Stellar Vanguard Armada Formation #076
export interface FleetDoctrineSpec_76 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_76: FleetDoctrineSpec_76 = {
  doctrineId: 'doctrine_vanguard_076',
  doctrineName: 'Battle Group Armada #076',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_76'
};
