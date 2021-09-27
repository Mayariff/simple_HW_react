import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
       /* <li>
            <span> {props.affair.name}</span>
            <span> | priority: {props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </li>*/
        <li>
            <span> {props.affair.name}</span>
            <span> | [priority: {props.affair.priority}] |</span>
            <SuperButton onClick={deleteCallback} style={{'width': '40px'}}>X</SuperButton>
        </li>
    )
}

export default Affair
