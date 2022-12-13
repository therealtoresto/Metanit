interface Device {
    name: string;
}

class Phone implements Device {
    name: string;;
    constructor(n: string) {
        this.name = n;
    }
}

function call(phone: Phone): void {
    console.log('Make a call by', phone.name); 
}
export default class SmartWatch {
    constructor(private model: string) {}
    printModel() {
        console.log(`Model: ${this.model}`);
    }
}
export { Device, Phone, call };