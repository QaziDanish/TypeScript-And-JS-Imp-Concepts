// Different practical Use Cases of Decorators

/****************For Logging Purpose********************/
function DecoratorForLogging(target: any, key: string, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(
      `Method ${key} is being called with these parameter: ${args.join(",")}`
    );
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} result is ${result}`);
  };

  return descriptor;
}

class Calculator {
  @DecoratorForLogging
  AddTwoNumbers(a: number, b: number) {
    return a + b;
  }
}

/****************END LOGGING PURPOSE DECORATORS********************/

/****************DECORATORS FOR MEMOIZATION PURPOSE********************/
function Memoize(target: any, key: string, descriptor: any) {
  const originalMethod = descriptor.value;
  const cache = new Map();
  descriptor.value = function (...args: any[]) {
    const inputParameters = JSON.stringify(args);

    if (cache.has(inputParameters)) {
      console.log(
        `Result ${cache.get(inputParameters)} has been fetched from cache`
      );
      return cache.get(inputParameters);
    }
    const result: number = originalMethod.apply(this, args);
    cache.set(inputParameters, result);
    console.log(`Calculated result for ${key}: ${result}`);
    return result;
  };

  return descriptor;
}

class ExpensiveCalculator {
  @Memoize
  MultiplyNumbers(a: number, b: number) {
    return a * b;
  }
}

export { Calculator, ExpensiveCalculator };
