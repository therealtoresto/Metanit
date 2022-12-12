{
    let user: [string, number] = ['Tom', 23];
    // user = [28, 'Ben']; // Error: must be [string, number]
    user[1] = 24;
    console.log(user);
    for (const prop of user) {
        console.log(prop);
    }
}
{
    function printUser(user: [string, number]) {};
    function createUser(name: string, age: number): [string, number] {
        return [name, age];
    }
}
{
    function printPerson(user: [string, number, boolean?]) {
        if (user[2] !== undefined) {
            console.log(`name: ${user[0]} age:${user[1]} isMarried:${user[2]}`);
        } else {
            console.log(`name: ${user[0]} age:${user[1]}`);
        }
    }
    const tom: [string, number] = ['Tom', 23];
    printPerson(tom);
}
{
    const math: [string, ...number[]] = ['Math', 1, 3, 4, 5, 3];
    const physics: [string, ...number[]] = ['Physics', 1, 3, 2];
    const printMarks = (marks: [string, ...number[]]) => {
        for (const mark of marks) {
            console.log(mark);
        }
    }
    printMarks(math);
    printMarks(physics);

    const chemistry: [...number[], string, boolean] = [1, 4, 4, 'Chemistry', true];
}
{
    const tom: readonly [string, number] = ['Tom', 23];
    const printUser = (user: readonly [string, number]) => {};
    const generateUser = (): readonly [string, number] => {
        return ['Tom', 23]
    };
}
{
    const tom: [string, number, boolean] = ['Tom', 23, true];
    const [name, age, isMarried] = tom;
    const [user, ...rest] = tom;
    const [, userAge, ] = tom;
}