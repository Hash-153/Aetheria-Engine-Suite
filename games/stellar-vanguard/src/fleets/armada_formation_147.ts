// Stellar Vanguard Armada Formation #147
export interface FleetDoctrineSpec_147 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_147: FleetDoctrineSpec_147 = {
  doctrineId: 'doctrine_vanguard_147',
  doctrineName: 'Battle Group Armada #147',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_147'
};
