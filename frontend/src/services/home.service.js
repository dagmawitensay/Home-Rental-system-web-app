import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3336/house/";
const user = JSON.parse(localStorage.getItem('user'));
const lesserId = user.user.id

const registerHouse = async (currState
) => {
    console.log(
      currState
    );
  const formData = new FormData();
  formData.append("Home_Type", currState.Home_Type);
  formData.append("Price", currState.Price);
  formData.append("City", currState.City);
  formData.append("Sub_City", currState.Sub_City);
  formData.append("Wereda", "Alemgena"); // Fix variable name
  formData.append("Kebele", currState.Kebele);
  formData.append("home_no", currState.home_no);
  formData.append("Size", currState.Size);
  formData.append("door", currState.Door);
  formData.append("floor", currState.Floor);
  formData.append("wall", currState.Wall);
  formData.append("roof", currState.Roof);
  formData.append("toilet", currState.Toilet);
  formData.append("shower", currState.shower);
  formData.append("kitchen", currState.kitchen);
  formData.append("licenses", currState.Home_license);
const auth = authHeader();
  const response = await axios.post(API_URL + lesserId, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            ...auth
        },
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
    console.log(response);
};


const getAllLesserHouses = (lesserId) => {
    return axios.get(API_URL + "lesser/" + lesserId, { headers: authHeader() })
}


const homeService = {
    registerHouse,
    getAllLesserHouses
}

export default homeService;