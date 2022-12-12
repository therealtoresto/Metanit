interface Point {
    readonly x: number;
    readonly y: number;
}

const pointA: Point = {
    x: 2,
    y: 4
}

const printUser = (point: Point): void => {
    console.log('id:', point.x, 'name:', point.y);
}
printUser(pointA);

const buildUser = (point): Point => {
    return { x: point.x, y: point.y };
}

const newUser = buildUser(pointA);
printUser(newUser);

interface IUser {
    id: number,
    name: string,
    readonly age?: number,
    sayWords(words: string): void,
    getFullName(surname: string): string,
}

let employee: IUser = {
    id: 1,
    name: 'Tom',
    age: 23,
    sayWords: (words: string): void => {
        console.log(`${employee.name} says: "${words}"`)
    },
    getFullName: (surname: string): string => {
        return `${employee.name} ${surname}`;
    },
}
employee.sayWords('Hi, how are you?');

class User implements IUser {
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    };
    getFullName(surname: string): string {
        return this.name + ' ' + surname;
    };
    sayWords(words: string): void {
        console.log(`${this.name} says: "${words}"`);
    };
}

const tom: User = new User(1, 'Tom', 23); // or :IUser

// Extension interface

interface IPerson{
    id: number;
    name: string;
}

interface IPerson {
    age: number;
}

const people: IPerson = { id: 1, name: 'Alice', age: 31 };

// Inheritance interfaces

interface IMovable {
    speed: number;
    move(): void;
}
interface ICar extends IMovable {
    fill(): void;
}
class Car implements ICar {
    speed: number;
    move(): void {
        console.log('Speed: ', this.speed);
    }
    fill(): void {
        console.log('Fuel is full');
    }
}

let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();

// Interface of function

interface FullNameBuilder {
    (name: string, surname: string): string;
}

let simpleBuilder: FullNameBuilder = (name: string, surname: string): string => {
    return 'Mr. ' + name + ' ' + surname;
}

let fullName = simpleBuilder('Bob', 'Simpson');
console.log(fullName); // Mr. Bob Simpson

// Interfaces of arrays

interface StringArray {
    [index: number]: string;
}

let phones: StringArray;
phones = ['iphone 7', 'HTC 10', 'HP Elite x3'];

let myPhone: string = phones[0];
console.log(myPhone);

// Hybrid interfaces

interface PersonInfo {
    (name: string, surname: string): void;
    fullName: string;
    password: string;
    authenticate(): void;
}

const pB = (name: string, surname: string) => {
    p.fullName = name + surname;
}
let p: PersonInfo = pB as PersonInfo;
p.password = '1111';
p.authenticate = () => {};


function personBuilder(): PersonInfo {
    let somePerson = (name: string, surname: string): void => {
        person.fullName = name + ' ' + surname;
    };
    let person: PersonInfo = somePerson as PersonInfo;
    person.authenticate = () => {
        console.log(person.fullName + ' sign in with password: ' + person.password);
    };
    return person;
}

const bill = personBuilder();
bill('Bill', 'Bronson');
bill.password = 'qwerty';
bill.authenticate();
