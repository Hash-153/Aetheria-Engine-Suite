// Stellar Vanguard Armada Formation #132
export interface FleetDoctrineSpec_132 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_132: FleetDoctrineSpec_132 = {
  doctrineId: 'doctrine_vanguard_132',
  doctrineName: 'Battle Group Armada #132',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 34,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_132'
};
