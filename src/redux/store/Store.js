import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/AuthReducers";
import { taskReducer } from "../reducers/TaskReducer";
import { uiReducer } from "../reducers/UiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    task: taskReducer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))