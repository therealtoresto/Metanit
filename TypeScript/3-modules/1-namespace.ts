// tsc --outFile app.js 1-namespace.ts personel-dep.ts
/// <reference path='personel-dep.ts' />
namespace Data {
    export namespace Personel {
        export interface IUser {
            displayInfo(): void;
        }
        export class Employee {
            constructor(public name: string) {
            }
        }
        export function work(emp: Employee): void{
            console.log(emp.name, 'is working...');
        }
        export const defaultUser = { name: 'Bill' };
        export const value = 'Hello';
    }
    export namespace Client {
        export class VipClient {
            constructor(public name: string){
            }
        }
    }
    const alice = new Personel.Employee('Alice');
    Personel.work(alice);

    console.log(Personel.defaultUser.name);
    console.log(Personel.value);
}
const tom = new Data.Personel.Employee('Tom');
console.log(tom.name);

const sam = new Data.Client.VipClient('Sam');
console.log(sam.name);

import employee = Data.Personel.Employee;
const bob = new employee('Bob');
console.log(bob.name);