// Stellar Vanguard Armada Formation #062
export interface FleetDoctrineSpec_62 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_62: FleetDoctrineSpec_62 = {
  doctrineId: 'doctrine_vanguard_062',
  doctrineName: 'Battle Group Armada #062',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_62'
};
