import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { todoService } from "../todoService";

function AddTodo() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    todoService.addTodo(task);
    setTask("");
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <>
      {/* Button to open modal */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#6c63fe] text-white px-4 py-2 rounded-lg hover:bg-[#5a52f1] transition"
        >
          + Add Todo
        </button>
      </div>

      {/* Overlay modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

          {/* Modal content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-96 p-6 relative z-10">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <CloseIcon />
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center text-[#6c63fe]">
              Add a New Todo
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border border-gray-400 rounded-lg p-2 text-black dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6c63fe]"
              />

              <button
                type="submit"
                className="bg-[#6c63fe] text-white py-2 rounded-lg hover:bg-[#5a52f1] transition"
              >
                Save Todo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTodo;
