export enum OpCode {
  PUSH_CONST = 0,
  LOAD_VAR = 1,
  STORE_VAR = 2,
  ADD = 3,
  SUB = 4,
  MUL = 5,
  DIV = 6,
  CMP_EQ = 7,
  CMP_LT = 8,
  JUMP = 9,
  JUMP_IF_FALSE = 10,
  CALL_NATIVE = 11,
  HALT = 12
}

export interface Instruction {
  op: OpCode;
  arg?: any;
}

export class ScriptVM {
  private stack: any[] = [];
  private memory = new Map<string, any>();
  private nativeFunctions = new Map<string, (...args: any[]) => any>();

  public registerNative(name: string, fn: (...args: any[]) => any): void {
    this.nativeFunctions.set(name, fn);
  }

  public setVariable(name: string, val: any): void {
    this.memory.set(name, val);
  }

  public getVariable(name: string): any {
    return this.memory.get(name);
  }

  public execute(program: Instruction[]): any {
    let ip = 0; // instruction pointer

    while (ip < program.length) {
      const instr = program[ip]!;

      switch (instr.op) {
        case OpCode.PUSH_CONST:
          this.stack.push(instr.arg);
          ip++;
          break;

        case OpCode.LOAD_VAR:
          this.stack.push(this.memory.get(instr.arg));
          ip++;
          break;

        case OpCode.STORE_VAR:
          this.memory.set(instr.arg, this.stack.pop());
          ip++;
          break;

        case OpCode.ADD: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a + b);
          ip++;
          break;
        }

        case OpCode.SUB: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a - b);
          ip++;
          break;
        }

        case OpCode.CMP_EQ: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a === b);
          ip++;
          break;
        }

        case OpCode.JUMP:
          ip = instr.arg;
          break;

        case OpCode.JUMP_IF_FALSE: {
          const cond = this.stack.pop();
          if (!cond) {
            ip = instr.arg;
          } else {
            ip++;
          }
          break;
        }

        case OpCode.CALL_NATIVE: {
          const fnName = instr.arg.name;
          const argCount = instr.arg.argc;
          const args: any[] = [];
          for (let i = 0; i < argCount; i++) {
            args.unshift(this.stack.pop());
          }
          const fn = this.nativeFunctions.get(fnName);
          const result = fn ? fn(...args) : undefined;
          this.stack.push(result);
          ip++;
          break;
        }

        case OpCode.HALT:
          return this.stack.pop();

        default:
          ip++;
      }
    }

    return this.stack.pop();
  }
}
