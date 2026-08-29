// Stellar Vanguard Armada Formation #148
export interface FleetDoctrineSpec_148 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_148: FleetDoctrineSpec_148 = {
  doctrineId: 'doctrine_vanguard_148',
  doctrineName: 'Battle Group Armada #148',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 26,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_148'
};
