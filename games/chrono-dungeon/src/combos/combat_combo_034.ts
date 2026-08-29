// ChronoDungeon Combat Combo Chain #034
export interface CombatComboNode_34 {
  stepIndex: number;
  inputCode: string;
  damageMultiplier: number;
  animationKey: string;
  statusEffectApplied?: string;
}

export const COMBAT_COMBO_CHAIN_34: CombatComboNode_34[] = [
  { stepIndex: 1, inputCode: 'KeyJ', damageMultiplier: 1.0, animationKey: 'LIGHT_SLASH_1' },
  { stepIndex: 2, inputCode: 'KeyJ', damageMultiplier: 1.25, animationKey: 'LIGHT_SLASH_2' },
  { stepIndex: 3, inputCode: 'KeyK', damageMultiplier: 1.8, animationKey: 'HEAVY_FINISHER_34', statusEffectApplied: 'STUN' }
];

export class ComboEvaluator_34 {
  private currentStep: number = 0;
  private comboTimer: number = 0;
  public comboTimeoutSeconds: number = 0.8;

  public processInput(inputCode: string, dt: number): number {
    this.comboTimer += dt;
    if (this.comboTimer > this.comboTimeoutSeconds) {
      this.currentStep = 0;
    }

    const expected = COMBAT_COMBO_CHAIN_34[this.currentStep];
    if (expected && expected.inputCode === inputCode) {
      this.currentStep++;
      this.comboTimer = 0;
      if (this.currentStep >= COMBAT_COMBO_CHAIN_34.length) {
        this.currentStep = 0;
        return 2.5; // Finished full combo!
      }
      return expected.damageMultiplier;
    }

    this.currentStep = 0;
    return 1.0;
  }
}
