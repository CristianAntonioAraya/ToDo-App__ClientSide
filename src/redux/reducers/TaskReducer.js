import { types } from "../types/Types";

const initialState = {
    tasks: null,
    activeTask: null
}


export const taskReducer = ( state = initialState, action ) => { 
    switch (action.type) {

        case types.setAllTasks:
            return { 
                ...state, 
                tasks: action.payload.tasks 
            }

        case types.setAciveTask:
            return { 
                ...state,
                activeTask: action.payload.active
            }

        case types.removeActiveTask: 
            return { 
            ...state,
            activeTask: null
        }


        default: return state;
    }
}

