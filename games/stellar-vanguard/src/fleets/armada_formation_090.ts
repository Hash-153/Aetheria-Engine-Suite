// Stellar Vanguard Armada Formation #090
export interface FleetDoctrineSpec_90 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_90: FleetDoctrineSpec_90 = {
  doctrineId: 'doctrine_vanguard_090',
  doctrineName: 'Battle Group Armada #090',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 30,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_90'
};
