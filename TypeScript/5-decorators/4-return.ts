const log = (target: Object, method: string, 
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args: number[]) => {
        console.log(JSON.stringify(args));
        const returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`);
        return returnValue;
    }
}

class Calculator {
    @log
    add(x: number, y: number): number {
        return x + y;
    }
}

const calc = new Calculator();
let z = calc.add(4, 5);
z = calc.add(6, 7);