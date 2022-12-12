interface IPerson {
    name: string;
}
class Person {
    name: string;
    constructor(userName: string) {
        this.name = userName
    }
}

class Employee extends Person {
    company: string;
    constructor(userName: string, company: string) {
        super(userName);
        this.company = company;
    }
}
const printPerson = (user: IPerson): void =>  {
    console.log(`Person ${user.name}`);
}
const personFactory = (userName: string): Person => {
    return new Employee(userName, 'not specified');
}

let tom: Person = new Employee('Tom', 'Microsoft');
printPerson(tom);
// console.log(tom.company); Error: 'company' not exists in type 'Person'

let bob = personFactory('Bob');
printPerson(bob);

let tomEmployee: Employee = <Employee>tom;
console.log(tomEmployee.company); // or <Employee>tom

printPerson({ name: 'Bob', company: 'Oracle' } as IPerson);

console.log(tom instanceof Person);