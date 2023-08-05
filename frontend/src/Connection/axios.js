import axios from "axios";

const shortfactAxios = axios.create({
    baseURL: 'http://localhost:8080/Shortfacts/'
});

const userAxios = axios.create({
    baseURL: 'http://localhost:8080/Users/'
});

export {
    shortfactAxios,
    userAxios
};