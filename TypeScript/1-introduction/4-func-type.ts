{
    function hello () {
        console.log('Hello TypeScript');
    };
    let message: () => void = hello;
    message();
}
{
    function sum (x: number, y: number): number {
        return x + y;
    };
    function subtract (a: number, b: number) {
        return a - b;
    };

    let op: (x: number, y: number) => number;

    op = sum;
    console.log(op(2, 4)); // 6
    op = subtract;
    console.log(op(6, 4)); // 2
}
// Function as param other function
{
    type Operation = (a: number, b: number) => number;
    let sum: Operation = function(x: number, y: number): number {
        return x + y;
    };
    function multiply (a: number, b: number): number {
        return a * b;
    }
    function mathOp (x: number, y: number, op: Operation): number {
            return op(x, y);
    }
    console.log(mathOp(10, 20, sum)); // 30
    console.log(mathOp(10, 20, multiply)); // 200
}
