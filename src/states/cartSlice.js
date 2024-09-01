import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sum: 0,
    count: 0,
    arr: [],
    countWishList: 0,
    arrWishList: []
}
const cartSlice = createSlice(
    {
        name: "toCart",
        initialState,
        reducers:{
            setAddToCart: (state, action) =>{
                const { item, quantity } = action.payload;
                const isItemInCart = state.arr.findIndex(p => p.item.productId === item.productId); 

                if (isItemInCart !== -1) {
                    state.arr[isItemInCart].quantity += quantity;
                    console.log(isItemInCart);
                } else {
                    state.arr.push({ item, quantity });
                    console.log(isItemInCart);
                    console.log(item.productName);
                }
                state.sum += action.payload.item.price * action.payload.quantity;
                console.log('sum:' + state.sum);
                state.count = state.arr.reduce(
                    (total, currentItem) => total + currentItem.quantity,
                    0
                  );
            },
            setAddToWishList: (state, action) => {
                const item = action.payload.item;
                const isItemInWishList = state.arrWishList.find(p => p.item.productId === item.productId);
    
                if (isItemInWishList) {
                    state.arrWishList = state.arrWishList.filter(p => p.item.productId !== item.productId);
                    state.countWishList--;
                    console.log("alredy here" + item.productId);
                } else {
                    state.arrWishList.push({ item }); 
                    state.countWishList++;
                    console.log(item);
                }
            },
            setRemoveFromCart: (state, action) => {
                const indexToRemove = state.arr.findIndex(p => p.item.productName === action.payload.productName);
                if (indexToRemove !== -1) {
                    state.sum -= state.arr[indexToRemove].item.price * state.arr[indexToRemove].quantity;
                    state.arr.splice(indexToRemove, 1);
                    state.count = state.arr.reduce(
                        (total, currentItem) => total + currentItem.quantity,
                        0
                      );
                }
            }
        }
    }
)

export const {setAddToCart, setRemoveFromCart, setAddToWishList} = cartSlice.actions;
export const toCart = (state) => state.toCart.arr;
export const toCartSum = (state) => state.toCart.sum;
export const toCartCount = (state) => state.toCart.count;
export const toWishList = (state) => state.toCart.arrWishList;
export const toWishListCount = (state) => state.toCart.countWishList;
export default cartSlice.reducer;