// Stellar Vanguard Armada Formation #130
export interface FleetDoctrineSpec_130 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_130: FleetDoctrineSpec_130 = {
  doctrineId: 'doctrine_vanguard_130',
  doctrineName: 'Battle Group Armada #130',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 30,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_130'
};
