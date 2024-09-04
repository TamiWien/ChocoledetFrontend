import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: "",
  userName: "",
  email: "",
  password: "",
  isDeleted: false,
  phone: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setLoginUser: (state, action) => {
      const { userId, userName, email, password, isDeleted, phone } = action.payload;
      state.userId = userId;
      state.userName = userName;
      state.email = email;
      state.password = password;
      state.isDeleted = isDeleted;
      state.phone = phone;
      console.log(action.payload.userId, action.payload.userName, action.payload.email, action.payload.password);
    },

    setLogoutUser: (state) => {
      state.userId = "";
      state.userName = "";
      state.email = "";
      state.password = "";
      state.isDeleted = false;
      state.phone= "";
    },
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export const selectUserId = (state) => state.user.userId;
export const selectUserName = (state) => state.user.userName;
export const selectEmail = (state) => state.user.email;
export const selectIsDeleted = (state) => state.user.isDeleted;
export const selectPhone = (state) => state.user.phone;
export const selectPassword = (state) => state.user.password;
export default userSlice.reducer;