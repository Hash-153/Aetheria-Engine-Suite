// Stellar Vanguard Armada Formation #139
export interface FleetDoctrineSpec_139 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_139: FleetDoctrineSpec_139 = {
  doctrineId: 'doctrine_vanguard_139',
  doctrineName: 'Battle Group Armada #139',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 48,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_139'
};
