// Stellar Vanguard Armada Formation #127
export interface FleetDoctrineSpec_127 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_127: FleetDoctrineSpec_127 = {
  doctrineId: 'doctrine_vanguard_127',
  doctrineName: 'Battle Group Armada #127',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_127'
};
