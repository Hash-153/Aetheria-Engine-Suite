// Stellar Vanguard Armada Formation #003
export interface FleetDoctrineSpec_3 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_3: FleetDoctrineSpec_3 = {
  doctrineId: 'doctrine_vanguard_003',
  doctrineName: 'Battle Group Armada #003',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 16,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_3'
};
