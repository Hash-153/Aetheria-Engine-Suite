// Stellar Vanguard Armada Formation #008
export interface FleetDoctrineSpec_8 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_8: FleetDoctrineSpec_8 = {
  doctrineId: 'doctrine_vanguard_008',
  doctrineName: 'Battle Group Armada #008',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 26,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_8'
};
