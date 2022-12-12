const getId = (id: any): any => {
    return id;    
}

console.log(getId(5));

const getSomeId = <T>(id: T): T => {
    return id;
}

const result1 = getSomeId<number>(5);
const result2 = getSomeId<string>('five');

const getString = <T>(args: Array<T>): string => {
    return args.join(', ');
}

const result3 = getString<number>([1,2, 34, -5]);
console.dir({ result1, result2, result3 });

// General classes and interfaces
interface IUser<T> {
    getId(): T;
}

class User<T> implements IUser<T> {
    private _id: T;
    constructor(id: T) {
        this._id = id;
    }
    getId(): T {
        return this._id;
    }
}

const tom = new User<number>(3); // tom get type number
// tom = new User<string>('32as'); // Error: tom type is number!
console.log(tom.getId());

const alice = new User<string>('x1c4');
console.log(alice.getId());

// Limitations of generics

const compareName = <T extends {name: string}>(obj1: T, obj2: T): void => {
    obj1 === obj2 ? console.log('names match') : console.log('names is not match');
}

const bill: { name: string } = { name: 'Bill' };
const sara: { name: string } = { name: 'Sara' };
compareName<{ name: string }>(bill, sara);

class Person {
    constructor(public name: string, public age: number){}
}
const bob = new Person('Bob', 24);
const sam = new Person('Sam', 22);
compareName(bob, sam);

type Human = { id: number, name: string };
const olifer: Human = { id: 1, name: 'Olifer' };
const laura: Human = { id: 2, name: 'Laura' };
compareName(olifer, laura);

interface Named {
    name: string;
}

const compareI = <T extends Named>(obj1: T, obj2: T): void => {
    obj1.name === obj2.name ? 
        console.log('names match') : 
        console.log('names is not match');
}

class NameInfo<T extends Named> {
    printName(obj: T): void {
        console.log(`Name: ${obj.name}`)
    }
}

const nameInfo1 = new NameInfo<Person>();
nameInfo1.printName(bob);

const nameInfo2 = new NameInfo<Human>();
nameInfo2.printName(olifer);

// Key word 'new'

const userFactory = <T>(type: { new (): T }): T => {
    return new type();
}

class Animal {
    constructor() {
        console.log('Animal created');
    }
}
const user: Animal = userFactory(Animal);
