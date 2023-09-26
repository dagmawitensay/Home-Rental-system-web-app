import axios from "axios";
import { useActionData } from "react-router";
import { applyMiddleware } from "redux";

const API_URL = "http://localhost:3336/user/";

const lesserRegister = async (First_Name, Last_Name, Email, User_Name,  Password, Region, Zone, Wereda, City, Phone_Number) => {
    const response = await axios.post(API_URL + "lesser/signup", {
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
    
    return response;
};

const lesseeRegister = async (
  First_Name,
  Last_Name,
  User_Name,
  Email,
  Password,
  Phone_Number
) => {
  console.log(First_Name, Last_Name, User_Name, Email, Password, Phone_Number);
  const response = await axios.post(API_URL + "lesse/signup", {
    First_Name,
    Last_Name,
    User_Name,
    Email,
    Password,
    Phone_Number,
  });
  console.log(response)
  return response;
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

    return response.data;
}

const logout = () => {
    localStorage.removeItem('user')
}

const isLoggedIn = () => {
    try{
        localStorage.getItem('user');
        return true;
    }catch{
        return false;
    }
}

export default {
    lesserRegister,
    lesseeRegister,
    login,
    logout,
    isLoggedIn
}