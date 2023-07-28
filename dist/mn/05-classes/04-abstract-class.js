class Vehicle {
    stop() {
        console.log('Stopped');
    }
}
export class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(speed);
    }
}
//# sourceMappingURL=04-abstract-class.js.map