const decorator = (target: Object, propertyName: string, 
    descriptor: PropertyDescriptor) => {
        // code
    }

const validator = (target: any, propertyKey: string, 
    descriptor: PropertyDescriptor) => {
        const oldSet = descriptor.set;

        descriptor.set = (value: string) => {
            if (value === 'admin') {
                throw new Error('Invalid value');
            }
            if (oldSet !== undefined) oldSet.call(this, value);
        }
    }

class User {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }
    @validator
    public set name(n: string) {
        this.name = n;
    }
}

const tom = new User('Tom');
console.log(tom.name);
// tom.name = 'admin';  // Error: invalid value
console.log(tom.name);
