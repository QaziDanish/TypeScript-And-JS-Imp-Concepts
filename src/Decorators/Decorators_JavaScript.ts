function myDecorator(target: any, key: string, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(
      `Method ${key} is being called with these parameter: ${args.join(",")}`
    );
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} result is ${result}}`);
  };

  return descriptor;
}

class MyClass {
  @myDecorator
  AddMethod(a: number, b: number) {
    return a + b;
  }
}

const myClassObj: MyClass = new MyClass();
myClassObj.AddMethod(55, 898);
