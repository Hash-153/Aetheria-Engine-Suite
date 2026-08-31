// Stellar Vanguard Armada Formation #120
export interface FleetDoctrineSpec_120 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_120: FleetDoctrineSpec_120 = {
  doctrineId: 'doctrine_vanguard_120',
  doctrineName: 'Battle Group Armada #120',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 10,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_120'
};
