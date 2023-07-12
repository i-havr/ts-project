type Union1 = "a" | "b" | "c" | "d";
type Union2 = "a" | "e" | "c" | "i";
type Union3 = Union1 | Union2; // all variants
type Union4 = Union1 & Union2; // a | c

type Union5 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};

// const example: Union5 = {

// }

// ВАЖЛИВО! КОД ВИЩЕ ДЕМОНСТРУЄ, ЩО ОПЕРАТОР & ДІЄ ПО-РІЗНОМУ
// У ЗАЛЕЖНОСТІ ВІД ТИПУ, А САМЕ: ЯКЩО & ВИКОРИСТОВУВАТИ З ЮНІОНАМИ (Union4),
// ТО ПОВЕРТАЮТЬСЯ ЛИШЕ УНІКАЛЬНІ ЗНАЧЕННЯ, А ЯКЩО ВИКОРИСТОВУВАТИ З ОБ'ЄКТАМИ (Union5),
// ТО ВІДБУВАЄТЬСЯ "СКЛЕЮВАННЯ", ТОБТО СТАЮТЬ ДОСТУПНІ УСІ ЗНАЧЕННЯ

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};
type Person = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employee = {
  contractStart: Date;
} & User &
  Person;

// const user1: Employee = {}

type Developer = {
  skills: string[];
  phone: string;
  level?: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
} & Employee;

export {};