import axios from "axios";

const yousap_api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:80/api',
});

export default yousap_api;