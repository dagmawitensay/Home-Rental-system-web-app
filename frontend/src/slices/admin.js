import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../services/admin.service";

export const getUnaprovedHouses = createAsyncThunk(
    'admin',
    async(thunkAPI) => {
        try {
          const response = await adminService.getUnaprovedHouses(); 
          console.log(response) 
          return response;
        } catch(error) {
            
        }
    }

)

export const getHouseDetail = createAsyncThunk(
  'admin',
  async({houseId}) => {
    try {
      const response = await adminService.getHouseDetail(houseId);
      return response;
    }catch(error) {

    }
  }
)

export const approve = createAsyncThunk('admin', async({houseId, approvalStatus}) => {
  try {
    console.log(houseId, approvalStatus)
    const response = await adminService.approve(houseId, approvalStatus);
    return response;
  } catch(error) {

  }
})