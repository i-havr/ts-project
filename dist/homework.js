"use strict";
let age;
age = 50;
let firstName;
firstName = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let user;
user = ["Max", 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = { load: Load.READY };
if (page.load === Load.LOADING) {
    console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
    console.log("Сторінка завантажена");
}
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const User = function (email, password) {
    this.email = email;
    this.password = password;
};
User.prototype.sayHello = function () {
    console.log("Hello");
    console.log("this ===>>>> ", this);
};
const user1 = new User("mango@gmail.com", "123456");
console.log({ value: 1 });
console.log("user1 ===>>>> ", user1);
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 10) + 1;
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key.getSignature();
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = "closed";
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door === "open") {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    constructor(key) {
        super(key);
    }
    openDoor(personKey) {
        console.log("houseKey => ", this.key.getSignature(), "personKey => ", personKey);
        if (this.key.getSignature() === personKey) {
            console.log("DOOR IS OPEN!");
            this.door = "open";
        }
        else {
            console.log("DOOR IS CLOSED!");
        }
    }
}
const houseKey = new Key();
const personKey = new Key();
const person = new Person(personKey);
const house = new MyHouse(houseKey);
house.openDoor(person.getKey());
house.comeIn(person);
console.log(house.tenants);
//# sourceMappingURL=homework.js.map