export {}

interface Todo {
  id: string,
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
}

type ReadOnlyTodo = Readonly<Todo>

type PartialTodo = Partial<Todo>
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

type RequiredTodo = Required<Todo>;
