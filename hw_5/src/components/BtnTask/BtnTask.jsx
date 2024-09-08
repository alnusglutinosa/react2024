import React from "react";
import './BtnTask.css';

export default function BtnTask({title, mode=1, handleClick}) {
    const className = `btn-task ${mode ? `btn-task--${mode}` : ''}`;

    return <>
        <button className={className} onClick={handleClick}>
            {title}
        </button>
    </> 
}