type id = number | string;
let userId : id = 2;
console.log(`Id: ${userId}`);
userId = 'space';
console.log(`Id: ${userId}`);

function printId(inputId: id) {
    console.log(`Id: ${inputId}`);
}

function getId(isNumber: boolean): id {
    if(isNumber) return 1;
    else return '1';
}

printId(12345);
printId('mars');
console.log(getId(true));

type Person = { name: string, age: number };

let tom: Person = { name: 'Tom', age: 36 };
let bob: Person = { name: 'Bob', age: 25 };

function printPerson(user: Person) {
    console.log(`Name: ${user.name} Age: ${user.age}`);
}

printPerson(tom);
printPerson(bob);

type Employee = Person & { company: string };

let sam: Employee = { name: 'Sam', age: 24, company: 'Microsoft' }

printPerson(sam);