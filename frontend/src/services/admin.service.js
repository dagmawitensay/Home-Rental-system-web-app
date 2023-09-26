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

const getHouseDetail = (houseId) => {
  const auth = authHeader();
  const response = axios.get(`http://localhost:3336/house/${houseId}/admin`,{
    headers: {
      "Content-Type": "json/application",
      ...auth
    }
  }).then((response) => {
    return response;
  });
  return response;
}

const approve = (houseId, Approval_status) => {
  const auth = authHeader();
  const response = axios.patch(
    `http://localhost:3336/house/${houseId}/admin`,
    { Approval_status },
    {
      headers: {
        "Content-Type": "application/json",
        ...auth,
      },
    }
  );
  return response;
};

const adminService = {
    getUnaprovedHouses,
    getHouseDetail,
    approve
}

export default adminService;