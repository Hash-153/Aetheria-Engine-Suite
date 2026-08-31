// Stellar Vanguard Armada Formation #115
export interface FleetDoctrineSpec_115 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_115: FleetDoctrineSpec_115 = {
  doctrineId: 'doctrine_vanguard_115',
  doctrineName: 'Battle Group Armada #115',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 40,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_115'
};
