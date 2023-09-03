export const initailState = {
    toggle: false,
}

export const actionType = {
    setToggle: "SET_TOGGLE"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.SET_TOGGLE: 
        return {...state, toggle: action.toggle}
        default: 
        return state
    }
}

export default reducer