class User {
    readonly name: string = 'Default user';
    age: number;
    constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }
    print() {
        console.log(`name: ${user.name} age: ${user.age}`);
    }
    toString(): string{
        return `${this.name}: ${this.age}`;
    }
}

let user = new User('Bob', 32);
// user.name = 'Tom'; // Error: name is readonly property
user.print();
console.log(user.toString());
