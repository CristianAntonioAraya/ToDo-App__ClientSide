import axios from "axios"
import { types } from "../types/Types"

const URL = 'http://localhost:4000/users/'

export const StartLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {

        const data = { email, password }

        axios.post(URL+'signin',data)
            .then( ({data}) => {
                const {userName, id, token} = data;
                console.log(data);
                dispatch(Login(id, userName, token)) 
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
                    dispatch(Login(id, userName, token)) 
                }
                else{
                    
                }
            })
            .catch( error => {
                console.log(error);
            })
    }
}

export const Login = (id, userName, token) => ({
    type: types.login,
    payload: { id, userName, token }
})