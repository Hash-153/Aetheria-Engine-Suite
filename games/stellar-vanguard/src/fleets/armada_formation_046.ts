// Stellar Vanguard Armada Formation #046
export interface FleetDoctrineSpec_46 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_46: FleetDoctrineSpec_46 = {
  doctrineId: 'doctrine_vanguard_046',
  doctrineName: 'Battle Group Armada #046',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_46'
};
