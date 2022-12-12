class Person {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
    print(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Employee extends Person {
    company: string;
    constructor(name: string, company: string) {
        super(name); // if parent without constructor - use super()!
        this.company = company;
    }
    work(): void {
        console.log(`${this.name} is worked in ${this.company}`);
    }
    print(): void { // overridind parent's method
        console.log(`Name: ${this.name}`); // or use super.print();
        console.log(`Work: ${this.company}`);
    }
}

const bob: Employee = new Employee('Bob', 'Microsoft');
bob.print();
bob.work();