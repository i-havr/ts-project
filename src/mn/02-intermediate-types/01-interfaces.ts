interface IUser {
  readonly email: string;
  readonly login: string;
  password: string;
}

// ми можемо у тому ж файлі повторно оголошувати інтерфейс і це не буде помилкою.
// це нам дає можливість у іншій частині файлу додавати, наприклад, нові властивості до початкового інтерфейсу

interface IUser {
  isOnline?: boolean;
}

// при створенні юзера ми тепер маємо доступ до усіх 4 властивостей
const user555: IUser = {
  email: "ihor@gmail.com",
  login: "ihor",
  password: "123456",
  isOnline: false,
};

interface IPerson {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth: number;
}

interface IEmployee extends IUser, IPerson {
  // на відміну від наслідування КЛАСІВ, ми можемо наслідуватись від кількох ІНТЕРФЕЙСІВ
  contractStart: Date; // додаємо нову властивість
}

interface IDeveloper extends IEmployee {
  skills: string[]; // додаємо нову властивість
  phone: string; // перевизначаємо обов'язковість поля phone
  level?: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
}
