import API from '../API'



export const fetchAllData = () =>  async dispatch => {
    const response =await API.get('/product-list/')
    dispatch({
        type:'FETCH_ALL',
        payload: response.data
    })
}
