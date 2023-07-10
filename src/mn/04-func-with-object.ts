function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinates of the point is x: ${point.x} and y: ${point.y}`);
}

const obj1 = {
  x: "1",
  y: "2",
};

const obj2 = {
  x: "444",
  y: "555",
  z: "999",
};

printPoint(obj1);
printPoint(obj2); // - немає помилки, так як функція очікує ЯК МІНІМУМ властивості x та y у об'єкта point. Це означає, що в нього можуть бути і інші властивості (у нашому випадку z), і це не буде помилкою.

function printName(user: { firstName: string; lastName?: string }): void {
  console.log("Hello", user.firstName.toUpperCase());

  // далі треба робити перевірку, чи є lastName, бо інакше ми будемо намагатися викликати метод toUpperCase у undefined

  if (user.lastName) {
    console.log("Nice to meet you Mr.", user.lastName.toUpperCase());
  }
}

printName({ firstName: "Ihor" });
printName({ firstName: "Ihor", lastName: "Havrylov" });
