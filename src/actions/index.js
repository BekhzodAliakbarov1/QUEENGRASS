import API from '../API'


// All Products Hamma Praductlar
export const fetchAllData = () =>  async dispatch => {
    const response =await API.get('/product-list/')
    dispatch({
        type:'FETCH_ALL',
        payload: response.data
    })
}
//Each product by name lIST
export const fetchSisisData = name =>  async dispatch => {
    const response =await API.get(`/product-list/${name}`)
    dispatch({
        type:'FETCH_ONLY_ONE',
        payload: response
    })
}


//Selected Product Tanlangan Pradukta
export const fetchSelectedCard = item => {
    return{
        type: 'FETCH_SELECTED_ITEM',
        payload: item
    }
}