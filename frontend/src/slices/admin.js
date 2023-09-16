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