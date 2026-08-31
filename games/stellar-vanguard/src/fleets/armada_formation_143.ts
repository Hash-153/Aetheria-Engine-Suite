// Stellar Vanguard Armada Formation #143
export interface FleetDoctrineSpec_143 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_143: FleetDoctrineSpec_143 = {
  doctrineId: 'doctrine_vanguard_143',
  doctrineName: 'Battle Group Armada #143',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 16,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_143'
};
