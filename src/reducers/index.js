import {combineReducers} from 'redux'


const fetchAllDataReducer = (state=[],action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        default:
            return state
    }
}
const fetchOneSpecialDataListReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_ONLY_ONE':
            return action.payload
        default:
            return state;
    }
}

const fetchOneSpecialDataReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_SELECTED_ITEM':
            return action.payload
        default:
            return state;
    }
}





export default combineReducers({
    allProducts: fetchAllDataReducer,
    oneProductList: fetchOneSpecialDataListReducer,
    selectedItem : fetchOneSpecialDataReducer
})