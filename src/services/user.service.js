import axios from "axios";
import authHeader from "./auth-header";
const URL = "http://localhost:3000/api/test/";
const getFriends = () => {
    return axios.get(URL + "all");
};
const getNameBoard = () => {
    return axios.get(URL + "name", { headers: authHeader() });
};
const getModeratorBoard = () => {
    return axios.get(URL + "moderator", { headers: authHeader() });
};
const getAdminBoard = () => {
    return axios.get(URL + "admin", { headers: authHeader() });
};

export default {
    getFriends,
    getNameBoard,
    getModeratorBoard,
    getAdminBoard,
};

