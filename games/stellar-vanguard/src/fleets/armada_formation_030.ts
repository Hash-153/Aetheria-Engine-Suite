// Stellar Vanguard Armada Formation #030
export interface FleetDoctrineSpec_30 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_30: FleetDoctrineSpec_30 = {
  doctrineId: 'doctrine_vanguard_030',
  doctrineName: 'Battle Group Armada #030',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 30,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_30'
};
