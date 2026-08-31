import { ScriptVM, OpCode } from '../packages/scripting/src/index.js';

export function testVM(): void {
  console.log("--> Testing @aetheria/scripting...");

  const vm = new ScriptVM();
  const program = [
    { op: OpCode.PUSH_CONST, arg: 10 },
    { op: OpCode.PUSH_CONST, arg: 25 },
    { op: OpCode.ADD },
    { op: OpCode.HALT }
  ];

  const res = vm.execute(program);
  if (res !== 35) throw new Error(`VM execution failed: expected 35 got ${res}`);

  console.log("✔ @aetheria/scripting VM tests passed successfully.");
}
