import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
    "users/fetchCart",
    async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_BE_API_URL}/cart`
        );
        // console.log(response.data);
        return response.data;
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: false,
        error: null

    },
    reducers: {
        add: (state,action) => {
           
            let arr=[...state.cart,...action.payload];
            state.cart=arr;
            // console.log(state.cart);
        },
        // addItem:(state,action)=>{
        //     [...state.cart,action.payload]
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                // console.log(state.cart);
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to fetch users";
            });
    }

});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
