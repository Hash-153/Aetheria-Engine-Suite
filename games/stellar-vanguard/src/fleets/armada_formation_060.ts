// Stellar Vanguard Armada Formation #060
export interface FleetDoctrineSpec_60 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_60: FleetDoctrineSpec_60 = {
  doctrineId: 'doctrine_vanguard_060',
  doctrineName: 'Battle Group Armada #060',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 10,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_60'
};
