import axios from "axios"
import { types } from "../types/Types"

const URL = 'http://localhost:4000/users/'

export const StartLoginEmailPassword = ( email, password ) => {
    return (dispatch ) => {


        const data = { email, password }

        axios.post(URL+'signin',data)
            .then( ({data}) => {
                const {userName, id, token} = data;
                dispatch(Login(id, userName))
                localStorage.setItem('token',token) 
            })
            .catch( error => {
                console.log(error);
            })
    }
}

export const StartRegister = ( userName, email, password ) => {
    return (dispatch) => {

        const data = { userName, email, password }

        axios.post(URL+'signup', data)
            .then( ({data}) => {
                if(data.ok){
                    const {userName, id, token} = data;
                    dispatch(Login(id, userName))
                    localStorage.setItem('token',token) 
                }
            })
            .catch( error => {
                console.log(error);
            })
    }
}

export const renewToken = () => { 
    return async ( dispatch ) => {

        const token = localStorage.getItem('token')

        const {data} = await axios.get(URL+'renew', { headers: { 'x-token':token }})

        if(data.ok){
                const { id, userName } = data;
                dispatch(Login( id, userName))
        }
        else{
            localStorage.removeItem('token')
        }
    }
}

export const Login = (id, userName) => ({
    type: types.login,
    payload: { id, userName }
})

export const Logout = () => ({
    type: types.Logout
})