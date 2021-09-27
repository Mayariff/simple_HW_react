import React from 'react';
import Img from '../../../assets/image/SmoothJauntyBighornedsheep-max-1mb.gif';
import s from './Error.module.css'

function Error404() {
    return (
        <div className={s.container}>
            <div className={s.a}>
                <h1>404</h1>
                <h2>Ooh shit!</h2>
                <div>
                    <span>You're lost... </span><br/>
                    <span>back to homepage</span>
                </div>
            </div>
            <div className={s.b}>
                <img src={Img} alt={"travolta"}/>
            </div>
        </div>
    )
}

export default Error404
