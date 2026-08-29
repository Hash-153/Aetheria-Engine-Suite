// Stellar Vanguard Armada Formation #122
export interface FleetDoctrineSpec_122 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_122: FleetDoctrineSpec_122 = {
  doctrineId: 'doctrine_vanguard_122',
  doctrineName: 'Battle Group Armada #122',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_122'
};
