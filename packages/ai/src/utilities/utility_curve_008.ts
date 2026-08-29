// Utility AI Decision Curve #008
export enum UtilityCurveType_8 {
  Linear = 'Linear',
  Polynomial = 'Polynomial',
  Logistic = 'Logistic',
  Exponential = 'Exponential'
}

export class UtilityResponseCurve_8 {
  public curveType: UtilityCurveType_8 = UtilityCurveType_8.Logistic;
  public slopeM: number = 2.5;
  public exponentK: number = 2.0;
  public shiftC: number = 0.4;
  public weight: number = 0.7;

  public evaluate(x: number): number {
    const clampedX = Math.max(0, Math.min(1, x));
    switch (this.curveType) {
      case UtilityCurveType_8.Linear:
        return Math.max(0, Math.min(1, this.slopeM * (clampedX - this.shiftC))) * this.weight;
      case UtilityCurveType_8.Polynomial:
        return Math.pow(clampedX, this.exponentK) * this.weight;
      case UtilityCurveType_8.Logistic:
        return (1 / (1 + Math.exp(-this.exponentK * (clampedX - this.shiftC)))) * this.weight;
      case UtilityCurveType_8.Exponential:
        return (Math.exp(this.slopeM * clampedX) - 1) / (Math.exp(this.slopeM) - 1) * this.weight;
    }
  }
}
