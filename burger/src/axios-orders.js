import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-fd291.firebaseio.com/'
})

export default instance;