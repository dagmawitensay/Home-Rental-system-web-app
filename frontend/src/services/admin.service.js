import axios from "axios";
import authHeader from "./auth-header";

const getUnaprovedHouses = () => {
    const auth = authHeader();
    const response = axios.get("http://localhost:3336/house/admin", {
      headers: {
        "Content-Type": "multipart/form-data",
        ...auth,
      },
    }).then((response) => {
        return response;
    });
    return response;
}


const adminService = {
    getUnaprovedHouses
}

export default adminService;