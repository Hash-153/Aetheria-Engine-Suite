// Stellar Vanguard Armada Formation #106
export interface FleetDoctrineSpec_106 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_106: FleetDoctrineSpec_106 = {
  doctrineId: 'doctrine_vanguard_106',
  doctrineName: 'Battle Group Armada #106',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_106'
};
