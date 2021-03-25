import {combineReducers} from 'redux'


const fetchAllDataReducer = (state=[],action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        default:
            return state
    }
}




export default combineReducers({
    allProducts: fetchAllDataReducer,
})