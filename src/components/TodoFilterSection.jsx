import React from "react";

const TodoFilterSection = ({ setOpen }) => {
  const handleClick = (e) => {
    setOpen(true);
  };
  return (
    <div className="mt-5 flex justify-end">
      <input
        className="bg-white hover:bg-blue-600 border border-blue-500 px-3 py-1 rounded-sm text-blue-600 hover:text-white cursor-pointer"
        type="button"
        value="Filter"
        onClick={handleClick}
      />
    </div>
  );
};

export default TodoFilterSection;
