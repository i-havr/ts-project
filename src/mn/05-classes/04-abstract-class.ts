abstract class Vehicle {
  abstract color: string;

  abstract drive(speed: number): void;

  public stop() {
    console.log('Stopped');
  }
}

export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }

  drive(speed: number) {
    console.log(speed);
  }
}

// const v1 = new Vehicle();