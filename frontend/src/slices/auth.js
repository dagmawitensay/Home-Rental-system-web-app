import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import authService from "../services/auth.service";


const user = JSON.parse(localStorage.getItem('user'));

export const lesserRegister = createAsyncThunk(
  "lesser/signup",
  async({
    First_Name,
    Last_Name,
    Email,
    User_Name,
    Password,
    Region,
    Zone,
    Wereda,
    City,
    Phone_Number,
  }, thunkAPI) => {
    try {
        const response = await authService.lesserRegister(First_Name, Last_Name, Email, User_Name,  Password, Region, Zone, Wereda, City, Phone_Number);
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
    }catch(error) {
      console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
    }
  }
);

export const lesseeRegister = createAsyncThunk(
  "lessee/signup",
  async (
    { First_Name, Last_Name, User_Name, Email, Password, Phone_Number },
    thunkAPI
  ) => {
    try {
      const response = await authService.lesseeRegister(
        First_Name,
        Last_Name,
        User_Name,
        Email,
        Password,
        Phone_Number
      );
      thunkAPI.dispatch(setMessage(response.data.message));

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk('signin', async({
    User_Name, Password
}, thunkAPI) => {
    try {
        const response = await authService.login(User_Name, Password);
        thunkAPI.dispatch(setMessage(response.message));
        return response;
    } catch (error) {
        const message = error.toString();
        thunkAPI.dispatch(setMessage("User Name or Password not correct!"));
        return thunkAPI.rejectWithValue();
    }
})

export const logout = createAsyncThunk('logout', async() => {
    authService.logout();
})

const initialState = user ? {isLoggedIn: true, user}: {isLoggedIn: false, user: null}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [lesserRegister.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [lesserRegister.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [lesseeRegister.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [lesseeRegister.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            console.log(state, action)
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null
        },

        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }

    }
})

const {reducer} = authSlice;
export default reducer;