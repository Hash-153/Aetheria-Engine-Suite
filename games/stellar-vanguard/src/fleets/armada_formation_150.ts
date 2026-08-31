// Stellar Vanguard Armada Formation #150
export interface FleetDoctrineSpec_150 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_150: FleetDoctrineSpec_150 = {
  doctrineId: 'doctrine_vanguard_150',
  doctrineName: 'Battle Group Armada #150',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 30,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_150'
};
