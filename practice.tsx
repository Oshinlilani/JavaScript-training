
"use client";

import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    setTodos([...todos, inputValue.trim()]);
    setInputValue("");
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setInputValue(todos[index]);
  };

  const handleEdit = () => {
    if (inputValue.trim() === "" || editingIndex === null) return;

    const newTodos = [...todos];
    newTodos[editingIndex] = inputValue.trim();

    setTodos(newTodos);
    setInputValue("");
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setInputValue("");
    setEditingIndex(null);
  };

  const handleDelete = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));

    if (editingIndex === indexToDelete) {
      handleCancel();
    } else if (
      editingIndex !== null &&
      indexToDelete < editingIndex
    ) {
      setEditingIndex(editingIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Todo App
        </h1>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editingIndex !== null ? handleEdit() : handleAdd();
              }
            }}
            placeholder="Enter a todo..."
            className="min-w-0 flex-1 rounded border border-gray-300 p-2"
          />

          <button
            onClick={editingIndex !== null ? handleEdit : handleAdd}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {editingIndex !== null ? "Save" : "Add"}
          </button>

          {editingIndex !== null && (
            <button
              onClick={handleCancel}
              className="rounded bg-gray-500 px-3 py-2 text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500">
            No todos yet. Add your first task!
          </p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-3 rounded border p-3"
              >
                <span className="min-w-0 flex-1 break-words">
                  {todo}
                </span>

                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(index)}
                    className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
