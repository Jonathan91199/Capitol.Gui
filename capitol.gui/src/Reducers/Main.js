let initialState = {
    sideBarState: false, 
    allSystems : []
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SIDEBAR_STATE': {
            return {
                ...state,
                sideBarState: action.value
            }
        }
        case 'SET_ALL_SYSTEMS': {
            return {
                ...state,
                allSystems: action.value
            }
        }

        default:
            return state
    }
}