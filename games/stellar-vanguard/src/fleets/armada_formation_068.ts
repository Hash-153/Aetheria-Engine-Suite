// Stellar Vanguard Armada Formation #068
export interface FleetDoctrineSpec_68 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_68: FleetDoctrineSpec_68 = {
  doctrineId: 'doctrine_vanguard_068',
  doctrineName: 'Battle Group Armada #068',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 26,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_68'
};
