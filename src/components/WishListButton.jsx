import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { setAddToWishList, toWishList } from '../states/cartSlice';

const WishListButton = ({ item }) => {
    const dispatch = useDispatch();
    const wishList = useSelector(toWishList);
    const isInWishList = wishList.some(p => p.item.productId === item.productId);

    const handleClick = () => {
        dispatch(setAddToWishList({ item }));
    };

    return (
        <div
            className="wishListBtn"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            {isInWishList ? <FaHeart /> : <FaRegHeart />}
        </div>
    );
};

export default WishListButton;
