import React, { useEffect, useState } from "react";
import InputSection from "../../components/InputSection";
import TodosList from "../../components/TodosList";
import TodoFilterSection from "../../components/TodoFilterSection";
import { useGetTodos, usePostTodo } from "../../apis/todosAPI";
import Drawer from "../../components/Drawer";
import CustomDrawer from "../../components/Drawer";
import { useLocation, useParams } from "react-router-dom";
import { getFormValue } from "../../utils/getFormValue";

const Todos = () => {
  // Parent Control
  const [open, setOpen] = useState(false);

  //GET Todo
  const location = useLocation();
  const { isLoading, isError, data, refetch, status } = useGetTodos({
    params: location.search,
  });

  //Refetch Todos List
  useEffect(() => {
    refetch();
  }, [location.search]);

  //POST Todo
  const postTodo = usePostTodo();
  const onSubmit = (e) => {
    e.preventDefault();
    let body = getFormValue(e, true);
    postTodo.mutate({ ...body, status: 0 });
  };

  //UI Part
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
        <TodoFilterSection setOpen={setOpen} />
        {/* List Section */}
        <TodosList data={data} />
      </div>
      {/* Filter Drawer */}
      <CustomDrawer open={open} setOpen={setOpen} />
    </div>
  );
};

export default Todos;
