// Stellar Vanguard Armada Formation #146
export interface FleetDoctrineSpec_146 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_146: FleetDoctrineSpec_146 = {
  doctrineId: 'doctrine_vanguard_146',
  doctrineName: 'Battle Group Armada #146',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_146'
};
