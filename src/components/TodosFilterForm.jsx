import React from "react";

const TodosFilterForm = ({ setValueToQuery }) => {
  return (
    <form onSubmit={setValueToQuery}>
      <div className="overflow-scroll">
        <label className="mr-2">Progress :</label>
        <select className="border px-1 py-2" name="status">
          <option value={-1}>All</option>
          <option value={0}>Incompleted</option>
          <option value={1}>Completed</option>
        </select>
        <br />
      </div>
      <div className="mt-5 flex justify-end">
        <input
          className="bg-blue-600  px-3 py-1 rounded-sm text-white cursor-pointer"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  );
};

export default TodosFilterForm;
