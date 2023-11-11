import React from "react";

const InputSection = ({ onSubmit }) => {
  return (
    <div>
      <p className="font-semibold text-lg mb-4">Todo List</p>
      <form className="flex gap-2" onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          id=""
          className="px-2 py-1 border rounded-sm w-80"
          required
        />
        <button
          type="submit"
          value="submit"
          className="bg-blue-600 px-2 py-1 rounded-sm text-white cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputSection;
