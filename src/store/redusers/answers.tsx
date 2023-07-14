// import {UNCHECK} from "store/redusers/testReducer";

export interface defaultState {
    selectedAnswers: []
    answerId?: number
    correctAnswers?:[]
    wrongAnswer?: any
    correct:number
    wrong:number
}



const defaultState:defaultState = {
    selectedAnswers: [],
    correctAnswers: [],
    correct:1,
    wrong:0
};


export const addToAnswersList = (state = defaultState, action:any) => {

    const ADD_TO_ANSWERS_LIST="ADD_TO_ANSWERS_LIST"
    const REMOVE_FROM_ANSWERS_LIST="REMOVE_FROM_ANSWERS_LIST"
    const LOGOUT = 'LOGOUT'
    const GET_CORRECT_ANSWERS_LIST = "GET_CORRECT_ANSWERS_LIST"
    const SHOW_RESULT="SHOW_RESULT"

    switch (action.type) {
    case ADD_TO_ANSWERS_LIST:
        return {...state, selectedAnswers: [...state.selectedAnswers, action.payload]}

    case REMOVE_FROM_ANSWERS_LIST:
        return {
            ...state,
            selectedAnswers:state.selectedAnswers.filter(e => e !== action.payload)
        }

    case GET_CORRECT_ANSWERS_LIST:
        return {...state, correctAnswers: [...state.correctAnswers, action.payload]}

    case SHOW_RESULT:
        state.correct = 0;
        state.wrong = 0;
        state.selectedAnswers.forEach((answer:string, index) => {
            if (answer === state.correctAnswers[index]) {
                state.correct++;
            } else {
                state.wrong++;
            }
        }); return {...state}


    case LOGOUT:
        return defaultState
    default:
        return state

    }
}

export const addToAnswerListAction = (payload:any) => ({type: addToAnswersList, payload})

