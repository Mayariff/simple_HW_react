export  type initStateType ={
    isLoading: boolean
}
const initState: initStateType = {
    isLoading: false
}
type ActionType={
    type:'SPINNER',
    isLoading: boolean
}

export const loadingReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SPINNER': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean ): ActionType => {
    return {type:'SPINNER', isLoading}
}