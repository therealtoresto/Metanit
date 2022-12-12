{
    let list: number[] = [10, 20, 30];
    let colors: string[] = ['green', 'red', 'blue'];
    let names: Array<string> = ['Tom', 'Bob', 'Alice'];
    console.dir({ list, colors, names });
}
{
    const people: ReadonlyArray<string> = ['Tom', 'Bob', 'Sam'];
    const users: readonly string[] = ['Tom', 'Bob', 'Sam'];
    // people[1] = 'Ben'; // Error: readonly
    // people.push('Nick'); // Error: readonly
    // people.pop(); // Error: readonly
}
{
    const people: string[] = ['Tom', 'Bob', 'Sam', 'Alice'];
    const [first, ...rest] = people;
    const [, second, third, fourth] = people;
    console.log(first, second, third, fourth);
}
