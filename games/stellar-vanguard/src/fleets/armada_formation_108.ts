// Stellar Vanguard Armada Formation #108
export interface FleetDoctrineSpec_108 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_108: FleetDoctrineSpec_108 = {
  doctrineId: 'doctrine_vanguard_108',
  doctrineName: 'Battle Group Armada #108',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 26,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_108'
};
