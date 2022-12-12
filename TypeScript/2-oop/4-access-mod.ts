
class Person {
    protected name: string;
    private _year: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._year = this.setYear(age);
    }

    protected printPerson(): void {
        console.log(`Name: ${this.name} Year of birth: ${this._year}`);
    }

    private setYear(age: number): number {
        return new Date().getFullYear() - age;
    }
}

const tom = new Person('Tom', 24);
// tom.printPerson(); // Error: protected method
// console.log(tom._year); // Error: private property
// tom.setYear(45); // Error: private method

class Employee extends Person {
    protected company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }

    public printEmployee(): void {
        this.printPerson(); // Protected methodcan use from child
        console.log(`Company: ${this.company}`);
    }
}
let sam = new Employee('Sam', 31, 'Microsoft');
sam.printEmployee();
