// Stellar Vanguard Armada Formation #142
export interface FleetDoctrineSpec_142 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_142: FleetDoctrineSpec_142 = {
  doctrineId: 'doctrine_vanguard_142',
  doctrineName: 'Battle Group Armada #142',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_142'
};
