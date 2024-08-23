import React from "react";

import {renderItem} from '../../utils/renderItem'

export default function ListRender({list=[]}) {
    // console.log('list=', list);

    return list.length ? <ul>
        {list.map((item, index) => <li key={index}>{ renderItem(item) }</li>)}
    </ul> : null
}