// Stellar Vanguard Armada Formation #099
export interface FleetDoctrineSpec_99 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_99: FleetDoctrineSpec_99 = {
  doctrineId: 'doctrine_vanguard_099',
  doctrineName: 'Battle Group Armada #099',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 48,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_99'
};
