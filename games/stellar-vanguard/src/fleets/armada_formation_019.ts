// Stellar Vanguard Armada Formation #019
export interface FleetDoctrineSpec_19 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_19: FleetDoctrineSpec_19 = {
  doctrineId: 'doctrine_vanguard_019',
  doctrineName: 'Battle Group Armada #019',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 48,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_19'
};
