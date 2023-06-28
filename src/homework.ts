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

type JustPage = {
  title: string;
  likes: number;
  accounts: string[];
  status: "close" | "open";
  details?: {
    createdAt: Date;
    updatedAt: Date;
  };
};

// HW module #4

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

// ===============================

// HW module #5

// Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.
function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

// У вас є наступний тип даних

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

//Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight.
//Потрібно явно вказати, що ці поля з AllType.І сама функція повертає AllType.Скористайтеся Pick.

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Вкажіть дженерики для функції об'єднання об'єктів.

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// У вас є наступні класи. Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.

class Component<T> {
  constructor(public props: T) {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
