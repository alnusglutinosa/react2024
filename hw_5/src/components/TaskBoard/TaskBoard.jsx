import React, {useState, useEffect} from 'react'
import TaskGroup from '../TaskGroup/TaskGroup'
import {fetchAllTasks} from '../../api/fetchAllTasks'
import { putTaskById } from '../../api/putTaskById'
import { deleteTaskById } from '../../api/deleteTaskById'
// import { createTask } from '../../api/createTask'
import './TaskBoard.css';

export default function Posts() {
  const [taskAllList, setTaskAllList] = useState([]);
  const listTodo = taskAllList.filter(item => item.status === 0);
  const listInProgress = taskAllList.filter(item => item.status === 1);
  const listDone = taskAllList.filter(item => item.status === 2);

  const editStatusTask = async(item, newStatus) => {
    try {
      await putTaskById(item.id, newStatus);

      setTaskAllList(taskAllList.map((itemAll) => {
        if(itemAll === item) itemAll.status = newStatus;
        return itemAll;
      }))
    } catch(err){
        console.log(err);
    }
  }

  const handleToDoList = async(e, item) => {
    editStatusTask(item, 1);
  }

  const handleBackList = async(e, item) => {
    editStatusTask(item, 0);
  }

  const handleInProgressList = async(e, item) => {
    editStatusTask(item, 2);
  }

  const handleDoneList = async (e, item) => {
    try {
      await deleteTaskById(item.id);
      setTaskAllList(taskAllList.filter((itemAll) => itemAll.id !==item.id));
    } catch(err){
        console.ereror(err);
    }
  }

  // const handleCreateTask = async() => {
  //  const newTask = {
  //     status: 0,
  //     title: 'title 11',
  //   };
  //   try {
  //     const response = await createTask(newTask);
  //     setTaskAllList([...taskAllList, response]);
  //   } catch(err){
  //       console.error(err);
  //   }
  // }

  useEffect(() => {
      (async () => {
        const response = await fetchAllTasks();
        setTaskAllList(response)
      })();
  }, [])

  return <>
  <div className="task-board">
    <TaskGroup title="In progress" list={listTodo} status={0} handleEditList={handleToDoList}/>

    <TaskGroup title="Done" list={listInProgress} status={1} handleEditList={handleInProgressList} handleBackList={handleBackList}/>

    <TaskGroup title="To archive" list={listDone} status={2} handleEditList={handleDoneList}/>
  </div>



  {/* <hr />
  length={taskAllList.length}
    <button  onClick={handleCreateTask}>create</button>
    <div> {taskAllList.length
    ? <ul>{taskAllList.map(item => <li key={item.id}>id:{item.id}  title:{item.title} status:{item.status}</li>)}</ul>
    : null}</div>
  <hr /> */}
  </>;
}