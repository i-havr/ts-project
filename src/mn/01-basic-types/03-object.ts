interface Car {
  wheels: number;
  brand: string;
  type: string;

  isNew?: boolean; // - необов'язкова властивість об'єкту

  [key: string]: unknown; // - спеціальний синтаксис, що дозволяє до створених об'єктів додавати будь-яку кількість додаткових властивостей
}

const car: Car = {
  wheels: 4,
  brand: "BMW",
  type: "Sedan",
  isNew: false,
};

car.brand = "Mercedes";

console.log(car);

const car2: Car = {
  brand: "Audi",
  type: "",
  wheels: 4,
};

car2["go"] = true; // - в даному прикладі ми додали властивість, якої спочатку не було в інтерфейсі Car. Такий вид запису РЕКОМЕНДОВАНИЙ, але можна також використати інший вид запису: car2.go = true
