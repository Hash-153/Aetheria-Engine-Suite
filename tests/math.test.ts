import { Vec2, Vec3, Mat4, Quat, SimplexNoise, Fixed16 } from '../packages/math/src/index.js';

export function testMath(): void {
  console.log("--> Testing @aetheria/math...");

  // Vec2
  const v1 = new Vec2(3, 4);
  if (Math.abs(v1.length() - 5) > 1e-6) throw new Error("Vec2 length failed");
  v1.normalize();
  if (Math.abs(v1.length() - 1) > 1e-6) throw new Error("Vec2 normalize failed");

  // Vec3
  const v3a = new Vec3(1, 0, 0);
  const v3b = new Vec3(0, 1, 0);
  const v3c = Vec3.cross(v3a, v3b);
  if (v3c.z !== 1) throw new Error("Vec3 cross product failed");

  // Fixed16
  const f1 = Fixed16.fromNumber(2.5);
  const f2 = Fixed16.fromNumber(1.5);
  const f3 = f1.mul(f2);
  if (Math.abs(f3.toNumber() - 3.75) > 1e-3) throw new Error("Fixed16 multiplication failed");

  console.log("✔ @aetheria/math tests passed successfully.");
}
