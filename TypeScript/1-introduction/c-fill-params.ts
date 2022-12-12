{
    const getNames = (num: number, ...names: string[]): number => {
        console.log(num);
        for (const name of names) {
            console.log(name);
        }
        return 0;
    }
    getNames(1, 'Tom', 'Bob');
    getNames(2, 'Sam', 'Alice', 'Ben');
}
{
    const printValues = (name: string, age: number) => {
        console.log(name, age);
    }
    const values = ['Tom', 23] as const;
    printValues(...values);
}