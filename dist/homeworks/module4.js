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
export class Person {
    constructor(key) {
        this.key = key;
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
            console.log("The persone inside");
        }
        else {
            console.log("Door is closed");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = "open";
            return;
        }
        console.log("The key doesn't fit this house!");
    }
}
const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=module4.js.map