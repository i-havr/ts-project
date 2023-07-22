export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

const obj1 = { a: 1, b: 2, c: 3 };
prop("a", obj1);
// prop('d', obj1) - тут буде помилка, тому що у об'єкта obj1 немає властивості d
prop(0, [1, 2, 3]);
prop(0, "str");
prop("toFixed", 0);
