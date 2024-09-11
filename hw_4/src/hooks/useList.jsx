import React, { useState, useEffect } from "react";
import service from "../services/todos";

import {
  LIST_FILTER_PRIORITY,
  LIST_FILTER_NON_PRIORITY,
} from "../constants/list";

export default function useList(filter, newTodo) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const getTodos = async () => {
    const response = await service.get();
    console.log('!!!!response=', response)
    setList(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if(Object.keys(newTodo).length) getTodos();
  }, [newTodo])

  useEffect(() => {
    switch (filter) {
      case LIST_FILTER_PRIORITY:
        setFilteredList(list.filter((item) => item.priority));
        break;
      case LIST_FILTER_NON_PRIORITY:
        setFilteredList(list.filter((item) => !item.priority));
        break;
      default:
        setFilteredList(list);
    }
  }, [filter, list]);

  const handleItemDelete = async (e, id) => {
    console.log('handleItemDelete !!!!item=', id)
    await service.delete(id);
    getTodos();
  };

  const handleItemActive = async (e, item) => {
    e.stopPropagation();
    console.log('handleItemActive !!!!item=', item)
    if (item.active) {
      delete item.active;
    } else {
      item.active = true;
    }

    await service.put(item.id, item);
    getTodos();
  };

  const handleChangePriority = async (e, item) => {
    e.stopPropagation();
    await service.put(item.id, { ...item, priority: !item.priority });
    getTodos();
  };

  return { filteredList, handleItemDelete, handleChangePriority, handleItemActive, getTodos};
}