declare let message: string;
declare function hello(): void;
declare function sum(a: number, b: number);
declare const tom: { name: string, age: number, print: () => void };

interface IPoint {
    x: number;
    y: number;
}
declare const points: IPoint[];

declare class Person {
    name: string;
    age: string;
    constructor(name: string, age: number);
    display(): void;
}