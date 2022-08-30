import { configureStore } from "@reduxjs/toolkit";
import optymTrackSlicer from "./optymTrackSlicer";

export const store = configureStore({
  reducer: {
    [optymTrackSlicer.name]: optymTrackSlicer.reducer,
  },
});
