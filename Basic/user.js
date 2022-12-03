'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.displayInfo = () => {
            console.log(`Name: ${this.name} Age: ${this.age}`);
        };
    }
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
}


module.exports = User;
