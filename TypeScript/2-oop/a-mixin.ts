class Animal {
    feed(): void {
        console.log('We feed the animal')
    }
}

class Movable {
    speed: number = 0;
    move(): void {
        console.log('We are moving now');
    }
}

class Horse {}

interface Horse extends Animal, Movable {}

const applyMixins = (derivedCtor: any, baseCtor: any[]) => {
    baseCtor.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(Horse, [Animal, Movable]);

let pony: Horse = new Horse();
pony.feed();
pony.move();