let initialState = {
    sideBarState: false
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SIDEBAR_STATE': {
            return {
                ...state,
                sideBarState: action.value
            }
        }

        default:
            return state
    }
}