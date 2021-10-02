const initState = {
    theme: 'some'
};



type ActionType={
    type:'CHANGE_THEME',
    theme: themeType
}

export type themeType = 'dark'|  'red' | 'some'

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:themeType): ActionType => {
    return { type:'CHANGE_THEME', theme}
};