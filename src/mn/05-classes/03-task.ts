// Добавьте типы для классов. Используйте короткую запись для конструктора и сделайте метод log недоступным для инстансов обоих классов.

class Rectangle {
  constructor(public width: number, public height: number) {
    this.log();
  }

  public area(): number {
    return this.height * this.width;
  }

  private log(): void {
    console.log(`new Rectangle was create at ${new Date()}`);
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}
