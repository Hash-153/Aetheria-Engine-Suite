// Parametric Curve Mathematical Evaluator #021
import { Vec2 } from '../vec2.js';

export class ParametricCurveEvaluator_21 {
  public frequencyA: number = 4;
  public frequencyB: number = 3;
  public phaseShift: number = 3.15;
  public amplitude: number = 125;

  public sampleLissajous(t: number, out = new Vec2()): Vec2 {
    const x = Math.sin(this.frequencyA * t + this.phaseShift) * this.amplitude;
    const y = Math.sin(this.frequencyB * t) * this.amplitude;
    return out.set(x, y);
  }

  public sampleCardioid(t: number, out = new Vec2()): Vec2 {
    const a = this.amplitude * 0.5;
    const x = 2 * a * (1 - Math.cos(t)) * Math.cos(t);
    const y = 2 * a * (1 - Math.cos(t)) * Math.sin(t);
    return out.set(x, y);
  }

  public sampleEpicycloid(t: number, k = 3, out = new Vec2()): Vec2 {
    const r = this.amplitude / (k + 2);
    const x = r * (k + 1) * Math.cos(t) - r * Math.cos((k + 1) * t);
    const y = r * (k + 1) * Math.sin(t) - r * Math.sin((k + 1) * t);
    return out.set(x, y);
  }
}
