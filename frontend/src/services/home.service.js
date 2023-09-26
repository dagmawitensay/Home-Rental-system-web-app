import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "http://localhost:3336/house/";

const getLesserId = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const lesserId = user.user.id;
    return lesserId
}

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
  formData.append("Wereda", currState.Wereda); // Fix variable name
  formData.append("Kebele", currState.Kebele);
  formData.append("home_no", currState.home_no);
  formData.append("Size", currState.Size);
  formData.append("door", currState.Door);
  formData.append("floor", currState.Floor);
  formData.append("wall", currState.Wall);
  formData.append("roof", currState.Roof);
  formData.append("toilet", currState.Toilet);
  formData.append("shower", currState.Shower);
  formData.append("kitchen", currState.Kitchen);
  formData.append("licenses", currState.houseLicense);
  console.log(formData.keys())
const auth = authHeader();
const lesserId = getLesserId();
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
};


const getAllLesserHouses = async () => {
    const lesserId = getLesserId();
    const response = await axios.get(API_URL + "lesser/" + lesserId, { headers: authHeader() })
        // console.log(response
    // })
    return response.data;
}

const getHouseDetail  = async (houseId) => {
    const response = await axios.get(API_URL + houseId, {headers: authHeader()})
    return response.data;
}


const homeService = {
    registerHouse,
    getAllLesserHouses,
    getHouseDetail
}

export default homeService;