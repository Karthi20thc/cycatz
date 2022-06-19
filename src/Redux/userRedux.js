import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.userEmail;
    },
  }
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;