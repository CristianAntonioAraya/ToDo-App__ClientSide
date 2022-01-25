import { types } from "../types/Types";

const initialState = {
    id:null,
    userName:null,
    token:null
}


export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.login:
            return { 
                id:action.payload.id,
                userName:action.payload.userName,
                token: action.payload.token
            }
        case types.Logout:
            return { }

        default:
            return state;
    }

}