// Stellar Vanguard Armada Formation #031
export interface FleetDoctrineSpec_31 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_31: FleetDoctrineSpec_31 = {
  doctrineId: 'doctrine_vanguard_031',
  doctrineName: 'Battle Group Armada #031',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 32,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_31'
};
