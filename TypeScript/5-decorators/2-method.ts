function deprecated(target: any, 
    propertyName: string, descriptor: PropertyDescriptor) {
        console.log('Method is deprecated');
    }

interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    get? (): any;
    set? (v: any): void;
}

// Simple decorator for the method

const readableM = (
    target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        descriptor.writable = false;
};

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @readableM
    print(): void{
        console.log(this.name);
    }
}

const tom = new User('Tom');
// tom.print = () = { // Error
//     console.log('Print has been changed');
// }
tom.print();
