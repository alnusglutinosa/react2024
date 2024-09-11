import React, { useState } from "react";
import "./style.css";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "./../TodosList/TodosList";
import ColorPicker from "./../ColorPicker/ColorPicker";
import Filter from "./../Filter/Filter";

export default function Todos({ liftingNewTodoToApp }) {
  const [newTodo, setNewTodo] = useState({});
  const [color, setColor] = useState();
  const [filter, setFilter] = useState();

  const liftedNewTodo = (item) => {
   setNewTodo(item);
  };

  return (
    <>
        <ColorPicker liftingColor={setColor} />
        <Filter liftingFilter={setFilter} />
        <TodosForm liftingNewTodo={liftedNewTodo} />
        <TodosList newTodo={newTodo} color={color} filter={filter} />
    </>
  );
}