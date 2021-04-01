import axios from 'axios'


export default axios.create({
    // baseURL: 'https://polar-shelf-89571.herokuapp.com/api',
    baseURL: 'http://queensgrass.pythonanywhere.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})