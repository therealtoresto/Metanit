// Intro
{
    let x: number = 10;
    let hello: string = 'hello world';
    let isValid: boolean = true;
    // hello = 12; // Error
}
// Boolean
{
    let isEnabled: boolean = true;
    let isAlive: boolean = false;
}
// Number
{
    let height: number = 1.86; 
    let decimal: number = 0xf00d; // 61453
    let binary: number = 0b1010; // 10
    let octal: number = 0o744; // 484
    console.dir({ height, decimal, binary, octal });
}
// String
{
    let firstName: string = 'Tom';
    let lastName = "Johns";
    let info: string = `Name: ${firstName} 
    ${lastName}`
    console.log(info);
}
// BigInt
{
    const num1: bigint = BigInt(100);
    const num2: bigint = 100n;
    console.dir({ num1, num2 });
}
// Any
{
    let someVar: any = 'hello';
    console.log(someVar);
    someVar = 20;
    console.log(someVar);

    var someArr: any[] = [ 24, 'Tom', false ];

    let x; // type: any
    x = 10;
    x = 'hello';
}
// Type guards
{
    let sum: any;
    sum = 1200;
    if (typeof sum === 'number') { // Types: string, number, bigint, boolean,
        let result: number = sum / 12; // symbol, undefined, object, function
        console.log(result);
    } else {
        console.log('Invalid operation');
    }
}