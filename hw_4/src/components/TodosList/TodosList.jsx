import React, { useState, useEffect, useMemo } from "react";
import useList from "../../hooks/useList";

export default function TodosList({newTodo, color, filter}) {
  const { filteredList, handleItemDelete, handleChangePriority, getTodos, handleItemActive } = useList(filter, newTodo);

  const getClassName = (item) => {
    const classes = [`todos__item`];
    if (item.priority) classes.push(`todos__item--priority`);
    if (item.active) classes.push(`todos__item--active`);
    return classes.join(` `);
  };

  return filteredList.length ? (
    <ul style={{color}}>
      {filteredList.map((item) => (
        <li
          key={item.id}
          className={getClassName(item)}
          onClick={(e) => handleItemActive(e, item)}
        >
          {item.title}{" "}
          <button onClick={(e) => handleItemDelete(e, item.id)}>Delete</button>{" "}
          <input
            type="checkbox"
            defaultChecked={item.priority}
            onChange={(e) => handleChangePriority(e, item)}
          />
        </li>
      ))}
    </ul>
  ) : null;
}