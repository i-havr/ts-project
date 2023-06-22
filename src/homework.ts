// HW module #2

let age: number;
age = 50;

let firstName: string;
firstName = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number): number => {
  return 100 + a;
};

//==================

let anything: any;
anything = -20;
anything = "Text";
anything = {};

//==================

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

//==================

let user: [string, number];
user = ["Max", 21];

//==================

enum Load {
  LOADING,
  READY,
}

const page = { load: Load.READY };

if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
  console.log("Сторінка завантажена");
}

//==================

let union: string | number;

//==================

let literal: "enable" | "disable";

//==================

function showMessage(message: string): void {
  console.log(message);
}

//==================

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
//==================

function customError(): never {
  throw new Error("Error");
}

//==================

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "close" | "open";
  details?: {
    createdAt: Date;
    updatedAt: Date;
  };
};

// HW module #3

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

// === HOUSE ====================

// === KEY ====================

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 10) + 1; //returns random of 1-10
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: number;

  constructor(key: Key) {
    this.key = key.getSignature();
  }
  getKey(): number {
    return this.key;
  }
}

class House {
  door: "open" | "closed" = "closed";
  tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door === "open") {
      this.tenants.push(person);
    }
  }

  // openDoor(key: Key) {
  //   if (this.key === key) {
  //     this.door = "open";
  //   }
  // }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(personKey: number) {
    console.log(
      "houseKey => ",
      this.key.getSignature(),
      "personKey => ",
      personKey
    );
    if (this.key.getSignature() === personKey) {
      console.log("DOOR IS OPEN!");
      this.door = "open";
    } else {
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
