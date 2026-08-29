// Stellar Vanguard Armada Formation #070
export interface FleetDoctrineSpec_70 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_70: FleetDoctrineSpec_70 = {
  doctrineId: 'doctrine_vanguard_070',
  doctrineName: 'Battle Group Armada #070',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 30,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_70'
};
