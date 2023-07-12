// Create two variants: aliases and interfaces

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

type Product = {
  title: string;
  price: number;
  isNew: boolean;
  isSale: boolean;
};

type Vehicle = {
  brand: string;
  wheels: number;
  year: number;
};

export type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;

// Склеювання типів можна застосувати і на самому початку оголошення типу, різниці ніякої немає:
// export type Car = Product &
//   Vehicle & {
//     type: string;
//     model: string;
//   };

const carFromType: Car = {
  brand: "Volvo",
  isNew: true,
  isSale: false,
  model: "S40",
  price: 26000,
  title: "Volvo S40",
  type: "sedan",
  wheels: 4,
  year: 2021,
};

interface IProduct {
  title: string;
  price: number;
  isNew: boolean;
  isSale: boolean;
}

interface IVehicle {
  brand: string;
  wheels: number;
  year: number;
}

export interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const carFromInterface: ICar = {
  brand: "Volvo",
  isNew: true,
  isSale: false,
  model: "S40",
  price: 26000,
  title: "Volvo S40",
  type: "sedan",
  wheels: 4,
  year: 2021,
};
