"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("module6");
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function AddProperty() {
    return function (constructor) {
        console.log("Modify");
        constructor.prototype.modify = true;
    };
}
let Controller = class Controller {
    constructor() {
        this.id = 1;
    }
};
Controller = __decorate([
    Logger("LOGGING - CONTROLLER"),
    AddProperty()
], Controller);
const controller = new Controller();
console.log("Modified classes", controller.modify);
function ControllerDecoration(config) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super(...args);
                this.parent = document.getElementById(config.parent);
                this.element = document.createElement(config.template);
                this.element.innerHTML = this.content;
                this.parent.appendChild(this.element);
            }
        };
    };
}
let Controller2 = class Controller2 {
    constructor() {
        this.content = "My controller2";
    }
};
Controller2 = __decorate([
    ControllerDecoration({
        parent: "app",
        template: "h2",
    })
], Controller2);
const controller2 = new Controller2();
const controller3 = new Controller2();
//# sourceMappingURL=module6-decorators.js.map