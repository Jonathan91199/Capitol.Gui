let initialState = {
    test: "abc"
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                test: action.value
            }
        }

        default:
            return state
    }
}