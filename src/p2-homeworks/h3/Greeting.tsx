import React, {ChangeEvent, KeyboardEvent} from 'react'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    onChangeText?: (value: string) => void
    onEnter?: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressEnter}
) => {
    //const inputClass = error ? s.error : ""

    return (<div>
            {/* <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressEnter }
                   className={inputClass}/>
            <button onClick={addUser}
            disabled={error? true: false}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>Error, incorrect name</div>}
        </div>
    <div>*/}
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            onKeyPress={onKeyPressEnter}
                            error={error}/>
            <SuperButton onClick={addUser}
                         disabled={error ? true : false}
            >
                add </SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
