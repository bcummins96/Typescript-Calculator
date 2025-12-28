export type Operation = "add" | "subtract" | "multiply" | "divide";

export function calculate(
  a: number,
  b: number,
  operation: Operation
): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}
