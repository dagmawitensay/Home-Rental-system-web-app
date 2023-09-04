import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3336/user";

const getPublicContent = () => {
    return axios.get(API_URL);
};

const getUserBoard = () => {
    return axios.get(API_URL + 'user', {headers: authHeader()});
}

const getLesserBoard = () => {
    return axios.get(API_URL + 'user', {headers: authHeader});

}

const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', {headers: authHeader})
}


export default {
    getPublicContent,
    getUserBoard,
    getLesserBoard,
    getAdminBoard
}