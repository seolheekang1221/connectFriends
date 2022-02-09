import axios from "axios";
const URL = "http://localhost:3000/api/auth/";
const signUp = (name, email, password) => {
    return axios.post(URL + "signup", {
        name,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(URL + "login", {
        email,
        password,
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("id", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    signUp,
    login,
    logout,
};