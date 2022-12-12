abstract class Figure {
    abstract x: number; // child must implement it!
    abstract y: number; // child must implement it!
    abstract getArea(): void; // child must implement it!
}

class Rectangle extends Figure {
    // x: number;
    // y: number;
    constructor(public x: number, public y: number, 
        public width: number, public height: number) {
        super();
    }

    getArea(): void {
        let square = this.width * this.height;
        console.log('area =', square);       
    }
}
let someFigure: Figure = new Rectangle(10, 10, 20, 25);
someFigure.getArea();