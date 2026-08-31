// Stellar Vanguard Armada Formation #074
export interface FleetDoctrineSpec_74 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_74: FleetDoctrineSpec_74 = {
  doctrineId: 'doctrine_vanguard_074',
  doctrineName: 'Battle Group Armada #074',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 38,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_74'
};
