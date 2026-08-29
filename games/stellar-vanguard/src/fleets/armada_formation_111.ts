// Stellar Vanguard Armada Formation #111
export interface FleetDoctrineSpec_111 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_111: FleetDoctrineSpec_111 = {
  doctrineId: 'doctrine_vanguard_111',
  doctrineName: 'Battle Group Armada #111',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 32,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_111'
};
