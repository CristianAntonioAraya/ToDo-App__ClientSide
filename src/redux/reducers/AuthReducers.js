import { types } from "../types/Types";

const initialState = {
    id:null,
    userName:null,
    isAuth: false
}


export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.login:
            return {
                id:action.payload.id,
                userName:action.payload.userName,
                isAuth: true
            }
        case types.Logout:
            return { }

        default:
            return state;
    }

}

