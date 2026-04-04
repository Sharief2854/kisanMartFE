import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
    "users/fetchCart",
    async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_BE_API_URL}/cart`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
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
       incCount:(state,action)=>{
       let arr=state.cart;
       let newArr=arr.map((item,ind)=>{
            if(item._id==action.payload){
                return {
                    ...item,
                    count:item.count+1
                }
            }
            return item;
       });
        state.cart=newArr;
       },
        decCount: (state, action) => {
            let arr = state.cart;
            let newArr = arr.map((item, ind) => {
                if (item._id == action.payload) {
                    return {
                        ...item,
                        count: item.count -1
                    }
                }
                return item;
            });
            state.cart = newArr;
        },
        deleteItem:(state,action)=>{
            let arr = state.cart;
            let newArr = arr.filter((item, ind) => {
                if (item._id == action.payload) {
                    return false;
                }
                return true;
            });
            state.cart = newArr;
        },
        deleteAll: (state, action) => {
            state.cart = [];
        }
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

export const { add, incCount, decCount, deleteItem ,deleteAll} = cartSlice.actions;
export default cartSlice.reducer;
