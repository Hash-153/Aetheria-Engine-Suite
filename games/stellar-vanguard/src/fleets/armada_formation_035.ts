// Stellar Vanguard Armada Formation #035
export interface FleetDoctrineSpec_35 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_35: FleetDoctrineSpec_35 = {
  doctrineId: 'doctrine_vanguard_035',
  doctrineName: 'Battle Group Armada #035',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 40,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_35'
};
