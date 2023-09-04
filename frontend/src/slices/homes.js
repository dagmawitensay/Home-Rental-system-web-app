import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeService from "../services/home.service";

export const registerHouse = createAsyncThunk(
  "lesser",
  async({
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
    Home_license,
  }, thunkAPI) => {
    try {
      const response = await homeService.registerHouse(
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