// import {UNCHECK} from "store/redusers/testReducer";

export interface defaultState {
    answers: []
    answerId?: number
    correctAnswer?:any
    wrongAnswer?: any
}



const defaultState:defaultState = {
    answers: [],
};

export const addToAnswersList = (state = defaultState, action:any) => {

    const ADD_TO_ANSWERS_LIST="ADD_TO_ANSWERS_LIST"
    const REMOVE_FROM_ANSWERS_LIST="REMOVE_FROM_ANSWERS_LIST"
    const LOGOUT = 'LOGOUT'

    switch (action.type) {
    case ADD_TO_ANSWERS_LIST:
        return {...state, answers: [...state.answers, action.payload]}
    case REMOVE_FROM_ANSWERS_LIST:
        return {
            ...state,
            answers:state.answers.filter(e => e !== action.payload)
        }
    case LOGOUT:
        return defaultState
    default:
        return state

    }
}

export const addToAnswerListAction = (payload:any) => ({type: addToAnswersList, payload})

