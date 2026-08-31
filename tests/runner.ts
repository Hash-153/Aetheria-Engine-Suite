declare const process: any;
import { testMath } from './math.test.js';
import { testECS } from './ecs.test.js';
import { testPhysics } from './physics.test.js';
import { testAI } from './ai.test.js';
import { testVM } from './vm.test.js';

console.log("==========================================");
console.log("🚀 Running Aetheria Engine Test Suite...");
console.log("==========================================");

try {
  testMath();
  testECS();
  testPhysics();
  testAI();
  testVM();
  console.log("==========================================");
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY!");
  console.log("==========================================");
} catch (err) {
  console.error("❌ Test failed:", err);
  process.exit(1);
}
