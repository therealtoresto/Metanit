// Decorator parameter

const readable = (onlyRead : boolean) => {
    return (target: Object, propertyKey: string, 
        descriptor: PropertyDescriptor) => {
            descriptor.writable = !onlyRead;
        };
}

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @readable(false)
    print(): void {
        console.log(this.name);
    }
}

const alice = new User('Alice');
alice.print = () => console.log('Print has been changed');
alice.print();