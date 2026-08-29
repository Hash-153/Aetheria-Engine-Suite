// Stellar Vanguard Armada Formation #011
export interface FleetDoctrineSpec_11 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_11: FleetDoctrineSpec_11 = {
  doctrineId: 'doctrine_vanguard_011',
  doctrineName: 'Battle Group Armada #011',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 32,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_11'
};
