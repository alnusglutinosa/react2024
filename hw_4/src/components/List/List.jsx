import React, {useState, useEffect} from "react";
import { animals } from '../../mockedData/mockedData'
import './List.css'

export default function List() {
    const [list, setList] = useState(animals);

    useEffect(() => {
        const notActiveList = list.filter((item)=>!item.active);

        const intervalId = setInterval(() => {
            if (notActiveList.length > 0) {
                const randomIndex = Math.floor(Math.random() * notActiveList.length);
                const elRandom = notActiveList[randomIndex];

                setList(list.map((item) => {
                    if (elRandom.type === item.type) {
                        return {...item, active: true};
                    }
                    return item;
                }));
            } 
        }, 1000);

        if (!notActiveList.length) {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    });


    return (
        list.length ? <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td className={item.active ? 'active' : ''}>{item.type}</td>
                        <td>{item.icon}</td>
                    </tr>
                ))}
            </tbody>
        </table>  : null
    );
  }