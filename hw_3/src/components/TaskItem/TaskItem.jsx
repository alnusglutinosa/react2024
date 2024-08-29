import React from "react";
import './TaskItem.css';
import BtnTask from '../BtnTask/BtnTask'

export default function TaskItem({title, btnTitle, status, handleBtnClick, handleBtnBackClick}) {
    return <li className="task-item">
        {status === 1 ? <BtnTask title="To do" mode={status} handleClick={handleBtnBackClick}/> : null}
                
        <span className="task-item__title">{title}</span>

        <BtnTask title={btnTitle} mode={status} handleClick={handleBtnClick}/>
    </li>
}