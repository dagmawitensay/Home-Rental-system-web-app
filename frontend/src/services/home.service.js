import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3336/house/";

const registerHouse = (lesserId, Home_Type, Approval_status, Size, Price, City, Sub_City, Wereda, Kebele, home_no, Toilet, kitchen, 
    shower, Door, Floor, Roof, Wall, Home_license) => {
    return axios.post(API_URL + lesserId, {
      Home_Type,
      Approval_status,
      Size,
      Price,
      City,
      Sub_City,
      Wereda,
      Kebele,
      home_no,
      Toilet,
      kitchen,
      shower,
      Door,
      Floor,
      Roof,
      Wall,
      Home_license
    });
}


const getAllLesserHouses = (lesserId) => {
    return axios.get(API_URL + "lesser/" + lesserId, { headers: authHeader() })
}


const homeService = {
    registerHouse,
    getAllLesserHouses
}

export default homeService;