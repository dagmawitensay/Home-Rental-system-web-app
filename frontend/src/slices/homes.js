import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeService from "../services/home.service";

export const registerHouse = createAsyncThunk(
  "lesser",
  async({
    currState
  }, thunkAPI) => {
    
    try {
      const response = await homeService.registerHouse(
        currState
      );
      return response.data;
    } catch (error) {}
  }
);

export const getAllLesserHouses = createAsyncThunk("lesser/", async({}, thunkAPI) => {
    try {
        const response = await homeService.getAllLesserHouses();
        return response.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue();
    }
})

const initialState = {home: {}, homes: []}

const homeSlice = createSlice({
    name: 'homes',
    initialState
})

const { reducer } = homeSlice;
export default reducer;