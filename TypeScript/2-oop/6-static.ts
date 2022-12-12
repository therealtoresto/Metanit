class Person {
    age: number;
    name: string;

    private static retirementAge: number = 65;
    static calculateYears(age: number): number {
        return Person.retirementAge - age;
    }
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const tom = new Person('Tom', 36);
const years = Person.calculateYears(36);
console.log(`Before retirement: ${years} years`);

class Employee extends Person {}

const yearsEmployee = Employee.calculateYears(36);
console.log(yearsEmployee);