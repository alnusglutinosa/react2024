import React from "react";

import { user } from '../../mockedData/mockedData'
import {renderItem} from '../../utils/renderItem'

export default function ObjectRender({list}) {
    // console.log('user=', user);



    // renderItem(user[item])  {item}: {user[item]}
    return Object.keys(user).map((item, index) => <li key={index}>{item}: {renderItem(user[item])}</li>)
}