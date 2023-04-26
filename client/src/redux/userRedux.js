import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
   
  },
  reducers:{
    registerStart: (state) =>{
      state.isFetching = true;
      state.error= false;
    },
    registerSucess: (state, action) =>{
      state.isFetching = false;
      state.currentUser = action.payload;
      alert("Registered new user!")
;    },
    registerFailure: (state) =>{
      state.isFetching = false;
      state.error = true;
      alert("Username or email is invalid");
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.error= false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      alert("Login sucessful!!")
      return;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.error = false;
      alert("Logout Sucessfull!!");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut, registerFailure, registerStart,registerSucess } = userSlice.actions;
export default userSlice.reducer;
