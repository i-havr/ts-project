export {}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//   apple: '',
// }

interface Todo {
  id: string,
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
  id: 'sad',
  title: 'LEarn TS',
  completed: false
}

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;

type NewTodo = Pick<Todo, 'title' | 'description'>