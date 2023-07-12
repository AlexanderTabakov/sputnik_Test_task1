import {string} from "yup";
import {addToAnswersList} from "store/redusers/answers";

interface IUsers {
    login: string
    accessToken: string
}

const defaultState:IUsers = {
    login: '',
    accessToken: ''
};

export const users = (state = defaultState, action:any) => {

    const LOGIN="LOGIN"
    const LOGOUT="LOGOUT"

    switch (action.type) {
    case LOGIN:
        return {...state, login:action.payload, accessToken:action.payload}
    // case LOGOUT:
    //     return {
    //         ...state,
    //         answers:state.answers.filter(e => e !== action.payload)
    //     }
    default:
        return state

    }
}

export const login = (payload:any) => ({type: login, payload})
