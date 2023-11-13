import React, { useState } from "react";
import { Button, Drawer, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { getFormValue } from "../utils/getFormValue";
import TodosFilterForm from "./TodosFilterForm";
const CustomDrawer = ({ open = false, setOpen }) => {
  const navigate = useNavigate();
  const setValueToQuery = (e) => {
    e.preventDefault();
    let body = getFormValue(e);
    console.log(body);
    if (body.status > -1) {
      navigate(`?status=${body.status}`);
    } else {
      navigate("/");
    }
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        title="Filter for todo list"
        placement="right"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        getContainer={false}
      >
        <TodosFilterForm setValueToQuery={setValueToQuery} />
      </Drawer>
    </div>
  );
};
export default CustomDrawer;
