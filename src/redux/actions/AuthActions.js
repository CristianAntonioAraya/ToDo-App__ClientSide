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
    return ( dispatch ) => {

        const token = localStorage.getItem('token')

        axios.get(URL+'renew', { headers: { 'x-token':token }})
            .then( ({data}) => {
                const { id, userName } = data;
                dispatch(Login( id, userName))
            })
            .catch( error => { 
                console.log(error);
            })
    }
}

export const Login = (id, userName) => ({
    type: types.login,
    payload: { id, userName }
})

export const Logout = () => ({
    type: types.Logout
})