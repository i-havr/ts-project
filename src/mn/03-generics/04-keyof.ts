type WindowProp = keyof Window;

const myValue: WindowProp = "alert"; // тепер доступні усі методи, що є у глобального об'єкта Window

interface PC {
  brand: string;
  year: string;
}

type Typ1 = keyof PC; // brand | year

const val1: Typ1 = "brand"; // тепер доступні усі властивості, що є у типа PC

type Tup1 = keyof [string, number];

const val2: Tup1 = "0"; // ми створили кортеж, тож тепер нам доступні властивості-індекси 0 та 1.

export {};
