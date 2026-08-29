// Utility AI Decision Curve #022
export enum UtilityCurveType_22 {
  Linear = 'Linear',
  Polynomial = 'Polynomial',
  Logistic = 'Logistic',
  Exponential = 'Exponential'
}

export class UtilityResponseCurve_22 {
  public curveType: UtilityCurveType_22 = UtilityCurveType_22.Logistic;
  public slopeM: number = 2.0;
  public exponentK: number = 3.0;
  public shiftC: number = 0.6;
  public weight: number = 0.9;

  public evaluate(x: number): number {
    const clampedX = Math.max(0, Math.min(1, x));
    switch (this.curveType) {
      case UtilityCurveType_22.Linear:
        return Math.max(0, Math.min(1, this.slopeM * (clampedX - this.shiftC))) * this.weight;
      case UtilityCurveType_22.Polynomial:
        return Math.pow(clampedX, this.exponentK) * this.weight;
      case UtilityCurveType_22.Logistic:
        return (1 / (1 + Math.exp(-this.exponentK * (clampedX - this.shiftC)))) * this.weight;
      case UtilityCurveType_22.Exponential:
        return (Math.exp(this.slopeM * clampedX) - 1) / (Math.exp(this.slopeM) - 1) * this.weight;
    }
  }
}
