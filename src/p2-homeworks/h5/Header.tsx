import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from './pages/PushMenu.module.css'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

function Header() {

    const [checked , setChecked] =useState<boolean>(false)
    const onChangeChecked = (checked:boolean) =>setChecked(checked)


    return (
        <div className={s.wrapper}>

          <SuperCheckbox id='check-menu' onChangeChecked={onChangeChecked} />
            <nav className={checked? `${s.mainMenu} ${s.mainMenuChecked}` :s.mainMenu} >
                <NavLink to={PATH.PRE_JUNIOR} className={s.item}> PRE-JUNIOR |</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.item} >  JUNIOR |</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.item}>  JUNIOR+ </NavLink>

            </nav>

            
        </div>
    )
}

export default Header
