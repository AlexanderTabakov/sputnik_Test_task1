import { createStore, combineReducers } from 'redux'
import {addToAnswersList} from "store/redusers/answers";
import {composeWithDevTools} from "redux-devtools-extension";
// import {iconFormReducer} from "store/redusers/testReducer";


const rootReducer = combineReducers({
    add:addToAnswersList,


})
export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>


