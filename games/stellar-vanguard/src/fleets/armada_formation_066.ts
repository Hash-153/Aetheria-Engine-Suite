// Stellar Vanguard Armada Formation #066
export interface FleetDoctrineSpec_66 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_66: FleetDoctrineSpec_66 = {
  doctrineId: 'doctrine_vanguard_066',
  doctrineName: 'Battle Group Armada #066',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_66'
};
