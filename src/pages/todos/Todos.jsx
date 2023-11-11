import React from "react";
import InputSection from "../../components/InputSection";
import TodoFilter from "../../components/TodoFilter";
import TodosList from "../../components/TodosList";
import { useGetTodos, usePostTodo } from "../../apis/todosAPI";

const Todos = () => {
  //GET Todo
  const { isLoading, isError, data } = useGetTodos();

  //POST Todo
  const postTodo = usePostTodo();
  const onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    postTodo.mutate({ ...body, status: 0 });

    // Clear input fields
    const inputElements = e.currentTarget.querySelectorAll("input");
    inputElements.forEach((input) => {
      input.value = "";
    });
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="flex justify-center ">
      <div className="min-w-[300px] bg-white p-10 rounded-md mt-8">
        {/* Input Section */}
        <InputSection onSubmit={onSubmit} />
        {/* Filter Section */}
        <TodoFilter />
        {/* List Section */}
        <TodosList data={data} />
      </div>
    </div>
  );
};

export default Todos;
