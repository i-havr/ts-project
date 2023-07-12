// перегрузки функції, що показують можливі варіанти повернених значень
function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

//сама функція
function head(value: any): any {
  return value[0];
}
