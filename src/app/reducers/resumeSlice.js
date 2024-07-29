import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    resume:[],
    status:'idle'
}




export const addResume=createAsyncThunk(
    "resume/addResume",
    async (resumeData,thunkAPI)=>{
        try {
            const response = await axios.post("https://api.itbratrf.ru/resume/",)

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const resumeSlice=createSlice({
    name:"resume",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase()
    }
})

export default resumeSlice.reducer