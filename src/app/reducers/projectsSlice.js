import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  projectsCategory: [],
  status: "idle",
  project: [],
};

export const getProjectsCategory = createAsyncThunk(
  "projects/getProjectsCategory",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.itbratrf.ru/category/project/"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProjects = createAsyncThunk(
  "projects/addProject",
  async (projectData, thunkAPI) => {
    console.log(projectData);
    try {
        const token=localStorage.getItem('accessToken')
      const response = await axios.post("https://api.itbratrf.ru/project/", {
        image: projectData.image,
        name: projectData.name,
        contact: projectData.contact,
        valuta: projectData.valuta,
        price: projectData.price,
        skils: projectData.skils,
        description: projectData.description,
        category: projectData.category,
      },
    {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
    });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProjectsCategory.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProjectsCategory.fulfilled, (state, action) => {
      state.status = "success";
      state.projectsCategory = action.payload;
    });
    builder.addCase(getProjectsCategory.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(addProjects.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(addProjects.fulfilled, (state, action) => {
      state.status = "success";
      state.project = action.payload;
    });
    builder.addCase(addProjects.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default projectsSlice.reducer;
