import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const optymTrackSlicer = createSlice({
  name: "optymTrack",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    editModalState: (state) => {
      state.editModalState = !state.editModalState;
    },
  },
});

export const { setUser } = optymTrackSlicer.actions;

export default optymTrackSlicer;
