// Stellar Vanguard Armada Formation #140
export interface FleetDoctrineSpec_140 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_140: FleetDoctrineSpec_140 = {
  doctrineId: 'doctrine_vanguard_140',
  doctrineName: 'Battle Group Armada #140',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 10,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_140'
};
