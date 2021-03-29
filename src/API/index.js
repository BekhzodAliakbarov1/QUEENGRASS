import axios from 'axios'


export default axios.create({
    baseURL: 'https://murmuring-peak-81962.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})