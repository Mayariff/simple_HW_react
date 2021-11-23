import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

import {requestAPI} from "./RequestsAPI";


const Request = () => {

    const [success, setSuccess] = useState<boolean>(false)
    let [responseFromServer, setResponseFromServer] = useState<string|null>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }
    const PostResponseToServer = async () => {
        try {
            let response = await requestAPI.post(success)
            console.log(response.errorText)
            responseFromServer = response.errorText
        } catch (error:any) {
            console.log(error.response ? error.response.data.errorText : error.message)
            responseFromServer = error.response.data.errorText
        } finally {
            setResponseFromServer(responseFromServer)
        }
    }

    return (
        <div>
            <SuperButton onClick={PostResponseToServer}> Request</SuperButton>
            <SuperCheckbox onChange={onChangeHandler}/>
            <div>Сервер: {responseFromServer} </div>
        </div>
    );
};

export default Request;