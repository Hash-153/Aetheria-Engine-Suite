// Stellar Vanguard Armada Formation #126
export interface FleetDoctrineSpec_126 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_126: FleetDoctrineSpec_126 = {
  doctrineId: 'doctrine_vanguard_126',
  doctrineName: 'Battle Group Armada #126',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_126'
};
