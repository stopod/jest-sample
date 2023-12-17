export default class TodoList {
  private todos: string[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
  }

  removeTodoAtIndex(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  getAllTodos(): string[] {
    return this.todos;
  }

  getTodoAtIndex(index: number): string | undefined {
    return this.todos[index];
  }
}
