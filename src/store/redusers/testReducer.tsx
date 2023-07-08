interface testDefaultState {
    activeIcons: []
}


const initialState:testDefaultState = {
    activeIcons:[],
}
export const iconFormReducer = (state = initialState, action:any) => {
    switch(action.type){
    case CHECK:
        return {
            ...state,
            activeIcons:[...state.activeIcons,action.payload]
        }
    case UNCHECK:
        return {
            ...state,
            activeIcons:state.activeIcons.filter(e => e != action.payload)
        }
    default:
        return state
    }
}

export const CHECK = 'APP/CHECK'
export const UNCHECK = 'APP/UNCHECK'
