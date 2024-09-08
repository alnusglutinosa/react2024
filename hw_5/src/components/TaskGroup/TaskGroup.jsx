import React from "react";
import './TaskGroup.css';
import TaskItem from '../TaskItem/TaskItem'

export default function TaskGroup({list=[], title, status, handleEditList, handleBackList}) {
    const handleBtnClick = (e, item) => {
        handleEditList(e, item);
    }

    const handleBtnBackClick = (e, item) => {
        handleBackList(e, item);
    }

    return <div className="task-group">
        <h2>{title} <span className="task-group__count">{list.length}</span></h2>

        <ul>
            {list.map(item => <TaskItem
                key={item.id}
                title={item.title}
                btnTitle={title}
                status={status}
                handleBtnClick={(e) => handleBtnClick(e, item)}
                handleBtnBackClick={(e) => handleBackList(e, item)}
            />)}
        </ul>
    </div> 
}