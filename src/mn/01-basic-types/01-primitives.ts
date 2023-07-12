// numbers
let x = 1;
let y = 1.5;
// let z = 12345n; ==> це не є проблема, тип даних BigInt доступний, починаючи з es2020
let a = NaN;

// strings
let str1: string;
str1 = "Hello world";
let symb = Symbol("as");
// let b = str1 + symb; ==> помилка, бо не можна проводити конкатенацію строк та символів

// boolean
let o = true;
o = false;
let c = true;

// nothing
let h: undefined = undefined;
let g: null = null;

// literal
const num = 108;
const str2 = "str";

// universal
let mm: any = 1;
mm = "str";
mm = [];

let xx: unknown = 2;
if (typeof xx === "string") xx.toUpperCase(); //така перевірка називається TypeGuard
