import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
export  function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const id= v1()
        const  user: UserType = {
            _id: id,
            name
        };
        setUsers([...users, user])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3


