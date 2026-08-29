// Stellar Vanguard Armada Formation #022
export interface FleetDoctrineSpec_22 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_22: FleetDoctrineSpec_22 = {
  doctrineId: 'doctrine_vanguard_022',
  doctrineName: 'Battle Group Armada #022',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_22'
};
