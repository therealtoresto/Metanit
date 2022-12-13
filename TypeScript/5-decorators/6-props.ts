const myPropertyDecorator = (target: Object, propertyKey: string) => {
    // decorator code
}

const format = (target: Object, propertyKey: string) => {
    let _val = this[propertyKey]; // get props value
    const getter = () => 'Mr./Ms.' + _val;
    const setter = (newVal: string) => _val = newVal;

    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}

class User {
    @format
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    print(): void{
        console.log(this.name);
    }
}

const tom = new User('Tom');
tom.print();
tom.name = 'Tommy';
tom.print();