const regex = (pattern: string) => {
    const expression = new RegExp(pattern);
    return function regex(target: Object, propertyName: string) {
        const propertyValue = this[propertyName];

        const getter = () => propertyValue;

        const setter = (newVal: string) => {
            const isValid: boolean = expression.test(newVal);
            if (isValid === false) {
                throw new Error(`Value ${newVal} does not match ${pattern}`);
            } else {
                console.log(`${newVal} is valid`);
            }
        };

        if (delete this[propertyName]) {
            Object.defineProperty(target, propertyName, {
                get: getter,
                set: setter
            });
        }
    }
}

class Account {
    @regex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
    email: string;

    @regex("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
    phone: string;

    constructor(email: string, phone: string) {
        this.email = email, this.phone = phone;
    }
}

const account = new Account('account@gmail.com', '+123456789013');
// account.email = 'bestemail___43.su' // Error