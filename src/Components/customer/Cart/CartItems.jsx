import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import Summary from './Summary';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../../../redux/cartSlice';



function CartItems() {

    const [products, setproducts] = useState([])
    const [totalPrices, settotalPrices] = useState([]);
    const [grandTotal, setgrandTotal] = useState(0)
    const state = useSelector((state) => state.cart);

    const dispatch = useDispatch();

   
    function deleteItem(id){
        let res=products.filter((item,ind)=>{
            if(item.id==id){
                return false;
            }
            return true;
        })
        let newArr=totalPrices.filter((item,ind)=>{
            if(item.id==id){
                return false;
            }
            return true;
        })
        settotalPrices(newArr);
        calcGrandTotal(newArr);
        setproducts(res);
    }


    function getTotalPrice(totalPrice,id){
        let arr=totalPrices.map((item,ind)=>{
            if(item.id==id){
                return{
                    ...item,
                    price:totalPrice,
                }
            }
            return item;
        });
        // console.log(arr);
        settotalPrices(arr);
        calcGrandTotal(arr);

    }

    function calcGrandTotal(arr){
        let result = arr.reduce((acc, item, ind) => {
            return acc + item.price;
        }, 0);
        setgrandTotal(result);
    }
    useEffect(()=>{
        let arr=products.map((item,ind)=>{
            return {
                price:item.price,
                id:item.id
            };
        });
        // console.log("hi");
        settotalPrices(arr);
        calcGrandTotal(arr);
    },[])


    useEffect(()=>{
        setproducts(state.cart);
        // console.log(state.cart,"lkjgfdz")
    },[state]);


  return (
    <Grid
        container
        spacing={3}
        sx={{
            backgroundColor:"gray",
            margin:"20px 100px",
            // padding:"20px",
            borderRadius:"10px"
        }}
    >
        <Grid size={{xs:12,lg:8}}>
              <Box
                  sx={{
                      // border:"10px solid black",
                      // width:"600px"
                      backgroundColor: "white"
                  }}
              >
                  <Stack
                      sx={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                      }}
                  >
                      <Typography variant="h4" color="initial">
                          Shopping Cart
                      </Typography>
                      <Typography variant="h6" color="initial">
                          Items-{products.length}
                      </Typography>

                  </Stack>
                  <Divider />

                  <Grid container spacing={2}>
                      {
                        products.length==0?"Cart Empty":
                          products.map((item, ind) => {
                              return (
                                  <CartItem item={item.productId} deleteItem={deleteItem} getTotalPrice={getTotalPrice} key={item._id}/>
                              )
                          })
                      }
                  </Grid>
              </Box>
        </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Summary totalQuantity={products.length} grandTotal={grandTotal}/>
        </Grid>
    </Grid>
   
  )
}

export default CartItems