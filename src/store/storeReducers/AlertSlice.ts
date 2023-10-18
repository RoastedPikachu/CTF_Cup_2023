import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  isOpen: boolean;
}

const initialState: AlertState = {
  isOpen: true,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    closeAlertWindow(state: AlertState) {
      state.isOpen = false;
    },
  },
});

export default alertSlice.reducer;
