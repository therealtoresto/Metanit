{
    function add1(a: number, b: number) {
        let result = a + b;
        console.log(result);
    }
    add1(1, 2);
    // add1('b', 'a'); // Error
}

{
    let koef = 1.5;
    function add2(a:number) {
        let result = a * koef;
    }
    add2(20);
}

{
    function add3(a: number, b: number): void {
        console.log(a + b);
    }
    add3(10, 20);
}
// Optional params
{
    function getFullName(firstName: string, lastName: string) {
        return firstName + ' ' + lastName;
    }
    getFullName('Tom', 'Johnson');
    // getFullName('Tom'); // Error

    function getName(firstName: string, lastName?: string) {
        if (lastName) return firstName + ' ' + lastName;
        else return firstName;
    }
    console.log(getName('Tom', 'Johnson'));
    console.log(getName('Tom'));
}
// Default values of params
{
    function defaultLastName(): string {
        return 'Johnson';
    }
    function getUserName(firstName: string, lastName: string = defaultLastName()) {
        return firstName + ' ' + lastName;
    }
    console.log(getUserName('Tom', 'Johnson'));
    console.log(getUserName('Tom'));
}