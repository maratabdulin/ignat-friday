
const initState = {
    isDefault: true
}

export type DefaultStateType = {
    isDefault: boolean
}

type DefaultActionType = ReturnType<typeof defaultAC>

export const defaultReducer = (state = initState, action: DefaultActionType): DefaultStateType => { // fix any
    switch (action.type) {
        case 'DEFAULT': {
            return {...state, isDefault: action.payload.isDefault}
        }
        default:
            return state
    }
}

export const defaultAC = (isDefault: boolean) => {
    return {
        type: 'DEFAULT',
        payload: {
            isDefault
        }
    } as const
}
