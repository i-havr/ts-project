"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.log();
    }
    area() {
        return this.height * this.width;
    }
    log() {
        console.log(`new Rectangle was create at ${new Date()}`);
    }
}
class Square extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
//# sourceMappingURL=03-task.js.map