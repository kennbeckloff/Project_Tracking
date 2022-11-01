import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../adminprojects/adminprojectslice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});