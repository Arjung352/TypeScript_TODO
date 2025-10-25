import type { TodoTypes } from "./todo";

const LOCAL_KEY = "todo";

export const todoService = {
  getTodo: (): TodoTypes[] => {
    const todo = localStorage.getItem(LOCAL_KEY);
    if (todo) {
      const parsed = JSON.parse(todo);
      return parsed as TodoTypes[];
    } else {
      return [];
    }
  },
  addTodo: (task: string): TodoTypes => {
    const todos = todoService.getTodo();
    const newTodo: TodoTypes = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    todos.push(newTodo);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
    return newTodo;
  },
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = todoService.getTodo();
    const updateTodo = todos.map((t) => (todo.id === t.id ? todo : t));
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updateTodo));
    return todo;
  },
  deleteTodo: (id: number): void => {
    const todos = todoService.getTodo();
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedTodo));
  },
};
