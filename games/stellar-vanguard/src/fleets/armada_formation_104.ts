// Stellar Vanguard Armada Formation #104
export interface FleetDoctrineSpec_104 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_104: FleetDoctrineSpec_104 = {
  doctrineId: 'doctrine_vanguard_104',
  doctrineName: 'Battle Group Armada #104',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 18,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_104'
};
