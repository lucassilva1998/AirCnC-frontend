import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aircnc-lucas-silva-frontend.herokuapp.com',
});

export default api;
