function sum(a: number, b: number): number {
  return a + b;
}

function log(name: string, userId?: string): void {
  console.log("Hello", name, "with ID", userId || "anonym");
}

// log("Ihor", "12345");

// console.error("Oops");

function crash(): never {
  // never означає, що ця функція ніколи не завершить роботу
  throw new Error("crash");
}

// crash();

const average = (...nums: number[]) => {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
};

// console.log(average(4, 6, 15));
