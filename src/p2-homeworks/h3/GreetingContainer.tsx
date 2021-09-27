import React, {ChangeEvent, KeyboardEvent,  useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name:string)=> void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        const value = e.currentTarget.value
        setName(value)
    }
    const onKeyPressEnter =(e:KeyboardEvent<HTMLInputElement>)=>{
        setError('')
        if(e.code ==="Enter") {
            addUser() }
    }


    const addUser = () => {
        let trimName = name.trim();
        if(trimName) {
            addUserCallback(trimName)
            setName("")
            alert(`Hello ${trimName}!`)
        }else{setError('Error, incorrect name');}
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressEnter={onKeyPressEnter}
        />
    )
}

export default GreetingContainer
