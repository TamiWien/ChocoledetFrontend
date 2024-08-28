import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: "",
  userName: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setLoginUser: (state, action) => {
      const { userId, userName, email, password } = action.payload;
      state.userId = userId;
      state.userName = userName;
      state.email = email;
      state.password = password;
      console.log(userId, userName, email, password);
    },

    setLogoutUser: (state) => {
      state.userId = "";
      state.userName = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export const userIdSlice = (state) => state.userIdSlice.userId;
export const userNameSlice = (state) => state.userNameSlice.userName;
export const emailSlice = (state) => state.emailSlice.email;
export const passwordSlice = (state) => state.passwordSlice.password;
export default userSlice.reducer;