class User {
    name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

const tom : User = new User('Tom');
console.log('Hi, ', tom.name);

{
    var x = 1;
    var x = 2; // done
}

{
    let x = 1;
    // let x = 1;  // Error: can`t redeclare variable
}

{
    let x = 1;
    // var x = 2; // Error: can`t redeclare variable
}

{
    let x = 1;
    {
        let x = 2;
        console.log(x); // 2
    }
    console.log(x); // 1
}

{
    let x = 10;
    console.log(x);
    // var x = 20; // Error
    // console.log(x); // 20
    // const t = 50;
    // t = 256; // Error
    // console.log(t); // 256
}