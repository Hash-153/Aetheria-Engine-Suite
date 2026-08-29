// Stellar Vanguard Armada Formation #055
export interface FleetDoctrineSpec_55 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_55: FleetDoctrineSpec_55 = {
  doctrineId: 'doctrine_vanguard_055',
  doctrineName: 'Battle Group Armada #055',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 40,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_55'
};
