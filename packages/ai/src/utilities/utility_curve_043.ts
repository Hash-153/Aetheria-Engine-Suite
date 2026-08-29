// Utility AI Decision Curve #043
export enum UtilityCurveType_43 {
  Linear = 'Linear',
  Polynomial = 'Polynomial',
  Logistic = 'Logistic',
  Exponential = 'Exponential'
}

export class UtilityResponseCurve_43 {
  public curveType: UtilityCurveType_43 = UtilityCurveType_43.Logistic;
  public slopeM: number = 2.5;
  public exponentK: number = 3.5;
  public shiftC: number = 0.3;
  public weight: number = 0.6;

  public evaluate(x: number): number {
    const clampedX = Math.max(0, Math.min(1, x));
    switch (this.curveType) {
      case UtilityCurveType_43.Linear:
        return Math.max(0, Math.min(1, this.slopeM * (clampedX - this.shiftC))) * this.weight;
      case UtilityCurveType_43.Polynomial:
        return Math.pow(clampedX, this.exponentK) * this.weight;
      case UtilityCurveType_43.Logistic:
        return (1 / (1 + Math.exp(-this.exponentK * (clampedX - this.shiftC)))) * this.weight;
      case UtilityCurveType_43.Exponential:
        return (Math.exp(this.slopeM * clampedX) - 1) / (Math.exp(this.slopeM) - 1) * this.weight;
    }
  }
}
