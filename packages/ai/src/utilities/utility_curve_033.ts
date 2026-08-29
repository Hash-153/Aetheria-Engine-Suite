// Utility AI Decision Curve #033
export enum UtilityCurveType_33 {
  Linear = 'Linear',
  Polynomial = 'Polynomial',
  Logistic = 'Logistic',
  Exponential = 'Exponential'
}

export class UtilityResponseCurve_33 {
  public curveType: UtilityCurveType_33 = UtilityCurveType_33.Logistic;
  public slopeM: number = 2.5;
  public exponentK: number = 2.5;
  public shiftC: number = 0.5;
  public weight: number = 0.8;

  public evaluate(x: number): number {
    const clampedX = Math.max(0, Math.min(1, x));
    switch (this.curveType) {
      case UtilityCurveType_33.Linear:
        return Math.max(0, Math.min(1, this.slopeM * (clampedX - this.shiftC))) * this.weight;
      case UtilityCurveType_33.Polynomial:
        return Math.pow(clampedX, this.exponentK) * this.weight;
      case UtilityCurveType_33.Logistic:
        return (1 / (1 + Math.exp(-this.exponentK * (clampedX - this.shiftC)))) * this.weight;
      case UtilityCurveType_33.Exponential:
        return (Math.exp(this.slopeM * clampedX) - 1) / (Math.exp(this.slopeM) - 1) * this.weight;
    }
  }
}
