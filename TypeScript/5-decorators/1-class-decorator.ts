function sealed(constructor: Function) {
    console.log('Sealed decorator');
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    print(): void {
        console.log(this.name);
    }
}

// Object.defineProperty(User, 'age', { // Error
//     value: 17,
// });

function logger<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor: Function = function(name: string) {
        console.log('Creating new instance');
        this.name = name;
        this.age = 23;
        this.print = function(): void {
            console.log(this.name, this.age);
        }
    }
    return <TFunction>newConstructor;
}

@logger
class People extends User {}
let tom = new People('Tom');
let bob = new People('Bob');
tom.print();
bob.print();
