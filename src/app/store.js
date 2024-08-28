import { configureStore } from '@reduxjs/toolkit';
import ToCartReducer from "../states/cartSlice"
import UserReducer from "../states/userSlice"

export const store = configureStore({
  reducer: {
    toCart: ToCartReducer,
    user: UserReducer,
  },
});


// import { configureStore } from "@reduxjs/toolkit";
// import ToCartReducer from "../states/cartSlice"

// export const store = configureStore({
//     reducer: {
//         toCart: ToCartReducer,
//         userConected: UserConectedReducer
//     }
    
// });
