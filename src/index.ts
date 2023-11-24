import { Calculator, ExpensiveCalculator } from "./Decorators/Decorators";
const welcome: String = "Qazi Danish";

console.log(`Welcome ${welcome}`);

const simpleCalculator: Calculator = new Calculator();
simpleCalculator.AddTwoNumbers(1, 33);

const expensiveCalculator: ExpensiveCalculator = new ExpensiveCalculator();
expensiveCalculator.MultiplyNumbers(22, 33);
expensiveCalculator.MultiplyNumbers(22, 33);
