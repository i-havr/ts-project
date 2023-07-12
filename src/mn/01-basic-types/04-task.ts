/* Создайте интерфейсы User и Admin.

User должен содержать следующие ключи:

login, email, password, isOnline, lastVisited
Admin содержит все те же ключи, плюс ключ role.

 

Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

Проверьте, что поля не пустые и выведите приветственное сообщение в консоль. */

export interface IUser {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

// поки що так, але пізніше будемо розширювати інтерфейси за допомогою extends
interface IAdmin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user123: IUser = {
  login: "Ihor",
  email: "ihor@mail.com",
  password: "123",
  isOnline: false,
  lastVisited: new Date(2023, 7, 10),
};

const admin1: IAdmin = {
  login: "MaxAdmin",
  email: "ihor@mail.com",
  password: "123",
  isOnline: false,
  lastVisited: new Date(2023, 7, 10),
  role: "admin",
};

function login(user: { login: string; password: string }): void {
  if (user.login && user.password) {
    console.log("Greetings,", user.login.toUpperCase(), "!");
  } else {
    console.log("Some error!");
  }
}

login(user123);
login(admin1);
