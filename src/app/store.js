import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'
import projectsReducer from './reducers/projectsSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    projects:projectsReducer
  },
});