import React from 'react'
import s from './Message.module.css'


export type propsType={
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: propsType) {
    return ( <div className={s.message_around}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={s.message}>
                    <div className={s.message_name}>{props.name}</div>
                    <div className={s.message_text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
        </div>
    )
}

export default Message
