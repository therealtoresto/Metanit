{
    let person = { name: 'Tom', age: 23 };
    // person = { name: 'Bob' }; // Error: age expected
    let user: { name: string, age?: number } = { name: 'Tom' }; // Good
    console.log(user.age); // undefined
}
{
    function printUser(user: { name: string, age: number }) {
        console.log(`nmae: ${user.name} age: {user.age}`);
    }
    let tom = { age: 36, name: 'Tom', isMaried: true };
    printUser(tom);
}
{
    function defaultUser(): { name: string, age: number } {
        return { name: 'Tom', age: 37 };
    }
    let user = defaultUser();
    console.log(`name: ${user.name} age: ${user.age}`);
}
{
    const tom: { name: string, age?: number } = { name: 'Tom', age: 23 };
    const bob: { name: string, age?: number } = { name: 'Bob' };
    function printPerson(user: {name: string, age?: number}) {
        if ('age' in user) {
            console.log(`Name: ${user.name} Age: ${user.age}`);
        }
    }
    printPerson(tom);
    printPerson(bob);
}
{           
    function printf({ name, age = 29 }: { name: string, age?: number }) {
        console.log(`name: ${name} age: ${age}`);
    }

    let bob = { name: 'Bob' };
    printf(bob);

    let tom = { name: 'Tom', age: 25 };
    printf(tom);
}