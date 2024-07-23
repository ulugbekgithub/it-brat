import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { baseURL } from "../api/baseUrl";

const initialState = {
  currentUser: undefined,
  isLoading: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('https://api.itbratrf.ru/user/register', {
        user: userData,
      });
      console.log(response);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('https://api.itbratrf.ru/user/login', {
        user: userData,
      });
      console.log(response);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const token=localStorage.getItem("accessToken") ?? ""
      const response = await axios.post('https://api.itbratrf.ru/user', {
        headers:{
          Authorization:`Token ${token}`
        }
      });
      console.log(response);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
const logout=createAsyncThunk(
  "auth/logout",
  async()=>{
    localStorage.removeItem('accessToken')
  }
)


const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      }).addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      }).addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.currentUser=null
      }).addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.currentUser=null
      })
  },
});

export default authSlice.reducer;
