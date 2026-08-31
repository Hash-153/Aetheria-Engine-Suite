// Stellar Vanguard Armada Formation #052
export interface FleetDoctrineSpec_52 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_52: FleetDoctrineSpec_52 = {
  doctrineId: 'doctrine_vanguard_052',
  doctrineName: 'Battle Group Armada #052',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 34,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_52'
};
