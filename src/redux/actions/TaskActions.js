import axios from "axios"
import { types } from "../types/Types"

const URL= 'http://localhost:4000/task'

export const getAllTask = () => { 
    return ( dispatch, getState ) => { 

        const { id, token} = getState().auth 
        axios.get(URL+`/owner/${id}`, { headers: { "x-token": token }})
        .then( ( { data } ) => { 
            dispatch(setTasks(data.ownerTasks))
        })
        .catch( error => { 
            console.log(error);
        })
    }

}

export const setTasks = (tasks) => ({
    type: types.setAllTasks,
    payload: { tasks }
})