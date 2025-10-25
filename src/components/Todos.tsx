import { todoService } from "../todoService";
import type { TodoTypes } from "../todo";
import { useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function Todos() {
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  useEffect(() => {
    const data = todoService.getTodo();
    setTodos(data);
  }, []);

  function updateComplete(
    todo: TodoTypes,
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    // Save to localStorage
    todoService.updateTodo({ ...todo, completed: !todo.completed });
    window.location.reload();
  }

  return (
    <div className="flex justify-center mt-7">
      <div className="w-[33%] h-full overflow-auto mb-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 text-white my-4 p-2 border-b border-[#6c63fe]"
          >
            <button
              onClick={(e) => updateComplete(todo, e)}
              className="cursor-pointer"
            >
              {todo.completed ? (
                <CheckBoxIcon fontSize="medium" className="text-[#6c63fe]" />
              ) : (
                <CheckBoxOutlineBlankIcon
                  fontSize="medium"
                  className="text-gray-500"
                />
              )}
            </button>

            <span
              className={`${
                todo.completed ? "line-through text-gray-500" : ""
              } text-2xl capitalize`}
            >
              {todo.task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
