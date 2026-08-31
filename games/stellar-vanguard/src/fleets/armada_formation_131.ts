// Stellar Vanguard Armada Formation #131
export interface FleetDoctrineSpec_131 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_131: FleetDoctrineSpec_131 = {
  doctrineId: 'doctrine_vanguard_131',
  doctrineName: 'Battle Group Armada #131',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 32,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_131'
};
