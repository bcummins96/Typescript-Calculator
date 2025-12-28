import { calculate, Operation } from "./calculator";

function parseArgs(): {
  a: number;
  b: number;
  operation: Operation;
} {
  const [, , op, aStr, bStr] = process.argv;

  if (!op || !aStr || !bStr) {
    throw new Error(
      "Usage: calculator <add|subtract|multiply|divide> <a> <b>"
    );
  }

  const a = Number(aStr);
  const b = Number(bStr);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Both operands must be valid numbers");
  }

  return {
    operation: op as Operation,
    a,
    b
  };
}

try {
  const { a, b, operation } = parseArgs();
  const result = calculate(a, b, operation);
  console.log(`Result: ${result}`);
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}
