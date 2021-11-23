import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com'
})



export const requestAPI={
    post(success: boolean){
       return instanse.post( '/auth/test',{success} ).then(res =>res.data)
    }
}

