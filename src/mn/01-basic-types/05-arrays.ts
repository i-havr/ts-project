const numbers = [1, 2, 3, 4, 5];

const arr: (number | string)[] = [];

//Два способи, як можна вказати тип масиву (наприклад масив рядків):
const srings1: string[] = []; // - більш популярний синтаксис запису
const srings2: Array<string> = [];
// ================================================================

//У прикладі нижче ми створюємо масив об'єктів, що відповідають певному інтерфейсу
interface IMotorcycle {
  brand: string;
  color: string;
  isNew: boolean;
}

const motos1: IMotorcycle[] = [];
motos1.push({ brand: "Yamaha", color: "red", isNew: true });

// У прикладі нижче ми створюємо масив масивів
const arrOfArr: number[][] = [];
arrOfArr.push([1, 1]);

// У прикладі нижче ми передаємо масив аргументом функції
function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
}
