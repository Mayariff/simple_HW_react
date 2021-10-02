import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, themeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes: Array<themeType> = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string >( state=> state.theme.theme)
     const dispatch =useDispatch()
    // onChangeCallback

    const onChangeCallback=(value:themeType)=>{
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
