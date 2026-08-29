// Stellar Vanguard Armada Formation #063
export interface FleetDoctrineSpec_63 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_63: FleetDoctrineSpec_63 = {
  doctrineId: 'doctrine_vanguard_063',
  doctrineName: 'Battle Group Armada #063',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 16,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_63'
};
