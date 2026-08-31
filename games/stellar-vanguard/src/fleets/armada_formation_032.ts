// Stellar Vanguard Armada Formation #032
export interface FleetDoctrineSpec_32 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_32: FleetDoctrineSpec_32 = {
  doctrineId: 'doctrine_vanguard_032',
  doctrineName: 'Battle Group Armada #032',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 34,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_32'
};
