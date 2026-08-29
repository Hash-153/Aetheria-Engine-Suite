// Stellar Vanguard Armada Formation #026
export interface FleetDoctrineSpec_26 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_26: FleetDoctrineSpec_26 = {
  doctrineId: 'doctrine_vanguard_026',
  doctrineName: 'Battle Group Armada #026',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_26'
};
