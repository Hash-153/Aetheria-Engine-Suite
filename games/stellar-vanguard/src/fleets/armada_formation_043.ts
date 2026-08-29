// Stellar Vanguard Armada Formation #043
export interface FleetDoctrineSpec_43 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_43: FleetDoctrineSpec_43 = {
  doctrineId: 'doctrine_vanguard_043',
  doctrineName: 'Battle Group Armada #043',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 16,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_43'
};
