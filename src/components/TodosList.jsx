import React from "react";
import { useDeleteTodo, usePutTodo } from "../apis/todosAPI";

const TodosList = ({ data }) => {
  const putTodo = usePutTodo();
  const deleteTodo = useDeleteTodo();

  const handleEdit = (modifyData) => {
    putTodo.mutate({ ...modifyData, status: modifyData.status === 0 ? 1 : 0 });
  };

  const handleDelete = (modifyData) => {
    deleteTodo.mutate(modifyData);
  };

  return data?.map((field) => {
    return (
      <div className="mt-4 flex flex-col gap-2" key={field.id}>
        <div
          className={`flex justify-between bg-${
            field?.status === 0 ? "red" : "emerald"
          }-300/25 px-2 py-1`}
        >
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={field?.status}
              onChange={(e) => {
                handleEdit(field);
              }}
            />
            <p className="text-emerald-950">{field?.title}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                handleDelete(field);
              }}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default TodosList;
