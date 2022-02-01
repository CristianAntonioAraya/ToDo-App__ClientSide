import { type } from "@testing-library/user-event/dist/type";
import { types } from "../types/Types";

const initialState = {
    tasks: [],
    activeTask: null
}


export const taskReducer = ( state = initialState, action ) => { 
    switch (action.type) {

        case types.loadTasks:
            return { 
                ...state,
                tasks: action.payload
            }


        case types.addNewTask:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case types.setActiveTask:
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

