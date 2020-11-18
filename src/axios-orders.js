import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e3332.firebaseio.com/'
});

export default instance;