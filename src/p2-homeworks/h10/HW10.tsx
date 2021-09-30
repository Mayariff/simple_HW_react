import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import  {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import spinner from '../../assets/image/58e4a4e4fa041a11f796a2014b1bcfa4.gif'

function HW10() {
    // useSelector, useDispatch
    let isLoading = useSelector<AppStoreType, boolean>(state=>state.loading.isLoading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout( ()=>{dispatch(loadingAC(false))}, 5000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div>{isLoading
                ? (
                    <img src={spinner} alt={'spinner'} width={150}/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }</div>
            <hr/>
        </div>
    )
}

export default HW10
