const User = function (this: any, email: string, password: string) {
  this.email = email;
  this.password = password;
};

User.prototype.sayHello = function () {
  console.log("Hello");
  console.log("this ===>>>> ", this);
};

const user1 = new (User as any)("mango@gmail.com", "123456");
console.log({ value: 1 });

console.log("user1 ===>>>> ", user1);

// === KEY ====================

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 10) + 1; //returns random of 1-10
  }
  getSignature(): number {
    return this.signature;
  }
}

// === PERSON ====================

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

// === HOUSE ====================

abstract class House {
  protected door: "open" | "closed" = "closed";
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door === "open") {
      this.tenants.push(person);
      console.log("The persone inside");
    } else {
      console.log("Door is closed");
    }
  }

  abstract openDoor(key: Key): void;
}

// === MY HOUSE ====================

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = "open";
      return;
    }
    console.log("The key doesn't fit this house!");
  }
}

// === MAGIC ====================

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());
house.comeIn(person);
