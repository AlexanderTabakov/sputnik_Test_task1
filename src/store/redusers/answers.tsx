// import {UNCHECK} from "store/redusers/testReducer";

export interface defaultState {
    selectedAnswers: []
    answerId?: number
    correctAnswer?:[]
    wrongAnswer?: any
    correct:0
    wrong:0
}



const defaultState:defaultState = {
    selectedAnswers: [],
    correctAnswer: [],
    correct:0,
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
    case GET_CORRECT_ANSWERS_LIST:
        return {...state, correctAnswer: [...state.correctAnswer, action.payload]}
    case SHOW_RESULT:
        state.correct = 0;
        state.wrong = 0;
        state.correctAnswer.forEach((answer, index) => {
            if (answer === state.selectedAnswers[index]) {
                state.correct++;
            } else {
                state.wrong++;
            }
        }); return {...state}

    // case REMOVE_FROM_ANSWERS_LIST:
    //     return {
    //         ...state,
    //         answers:state.answers.filter(e => e !== action.payload)
    //     }
    case LOGOUT:
        return defaultState
    default:
        return state

    }
}

export const addToAnswerListAction = (payload:any) => ({type: addToAnswersList, payload})

