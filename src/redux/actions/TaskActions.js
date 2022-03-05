import axios from "axios"
import { types } from "../types/Types"

const URL= 'http://localhost:4000/task'

export const getAllTask = () => { 
    return ( dispatch, getState ) => { 

        const token = localStorage.getItem('token')

        const { id } = getState().auth 
        axios.get(URL+`/owner/${id}`, { headers: { "x-token": token }})
        .then( ( { data } ) => { 
            dispatch(LoadTask(data.ownerTasks))
        })
        .catch( error => { 
            console.log(error);
        })
    }
}

export const addNewTask = ( title, description ) => { 
    return async ( ) => {

        const body = { title, description }
        const token = localStorage.getItem('token')
        try {
            const { data} =await axios.post(URL+'/new', body, { headers: { 'x-token': token }})
        } catch (error) {
            console.log(error);
        }
    } 
}

export const deleteTask = ( id ) => {
    return async () => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.delete(URL+'/delete/'+id,{ headers: { 'x-token': token }})
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }
}



export const LoadTask = ( tasks ) => ({
    type: types.loadTasks,
    payload: tasks
})


export const setTasks = (tasks) => ({
    type: types.setAllTasks,
    payload: { tasks }
})

