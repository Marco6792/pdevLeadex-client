export const initailState = {
    toggle: false,
    loading: false
}

export const actionType = {
    setToggle: "SET_TOGGLE",
    setIsLoading: "SET_LOADING"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.SET_TOGGLE: 
        return {...state, toggle: action.toggle}
        case actionType.SET_LOADING: 
        return {...state, loading: action.loading}
        default: 
        return state
    }
}

export default reducer