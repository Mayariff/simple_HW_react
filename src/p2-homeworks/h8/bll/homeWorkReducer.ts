import { UserType} from "../HW8";

export  type sortAT = {
    type: 'sort',
    payload: 'up'|'down'
}
export type checkAT = {
    type: 'check',
    payload: number
}
export type ActionType = sortAT| checkAT



export const homeWorkReducer = (state: Array<UserType>, action: ActionType):Array<UserType>=> {
    let CopyState = [...state]
    switch (action.type) {
        case 'sort':
            let SortedState= CopyState.sort((a, b)=> a.name.toLowerCase() < b.name.toLowerCase() ?-1 :1)
            return action.payload === 'up' ? SortedState: SortedState.reverse()
        case 'check':
            return CopyState.filter(f=>f.age>= action.payload)
        default:
            return state
    }
}
