import axios from "axios";
import { useActionData } from "react-router";
import { applyMiddleware } from "redux";

const API_URL = "http://localhost:3336/user/";

const lesserRegister = (First_Name, Last_Name, Email, User_Name,  Password, Region, Zone, Wereda, City, Phone_Number) => {
    return axios.post(API_URL + "lesser/signup", {
        First_Name,
        Last_Name,
        Email,
        User_Name,
        Password,
        Region, 
        Zone,
        Wereda,
        City,
        Phone_Number
    });
};

const lesseeRegister = (First_Name, Last_Name, Email, User_Name, Password, Phone_Number) => {
    return axios.post(API_URL + "lesse/signup", {
        First_Name,
        Last_Name,
        Email,
        User_Name,
        Password,
        Phone_Number
    });
};

const login = async (User_Name, Password) => {
    const response = await axios.post(API_URL + "signin", {
        User_Name,
        Password
    }
    );
    if (response.data.Tokens.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    console.log(response.data);
    return response.data;
}

const logout = () => {
    localStorage.removeItem('user')
}

export default {
    lesserRegister,
    lesseeRegister,
    login,
    logout
}