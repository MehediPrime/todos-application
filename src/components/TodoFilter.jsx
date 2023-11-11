import React from "react";

const TodoFilter = () => {
  return (
    <div className="mt-5 flex justify-end">
      <select className="border">
        <option value={null}>All</option>
        <option value={0}>Incompleted</option>
        <option value={1}>Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
