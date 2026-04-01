import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { decCount, incCount, deleteItem } from '../../../redux/cartSlice';

function CartItem({ item, getTotalPrice }) {
    let { _id, name, category, price, unit, quantity,image}=item.productId;
    // console.log(item);
    const [totalPrice, settotalPrice] = useState(item.count*price);

    const [count, setcount] = useState(item.count);

    let dispatch=useDispatch();
    async function dec(){
        if(count<=1){
            return;
        }
        await axios.post(`${process.env.REACT_APP_BE_API_URL}/cart/count`, { id:item._id,operation:"dec" })
        dispatch(decCount(item._id));

        setcount((prev)=>{
            prev--;
            settotalPrice(prev*price);
            // getTotalPrice(prev * price,_id)
            return prev;
        })
    }
    async function inc(){
        if (count >= quantity){
            window.alert(`there is only ${quantity} ${unit}'s`);
            return;
        }
        await axios.post(`${process.env.REACT_APP_BE_API_URL}/cart/count`, { id: item._id, operation: "inc" });
        dispatch(incCount(item._id));
        // console.log(count);
        setcount((prev) => {
            prev++;
            settotalPrice(prev * price);
            // getTotalPrice(prev * price,_id)
            return prev;
        })


    }
    // useEffect(()=>{
    //     console.log(totalPrice);
    // },[totalPrice]);
   
  return (
    <Grid
        size={{xs:12}}
        sx={{
        }}
    >
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
              <Box 
                component="img" 
                src={image}
                sx={{
                    width:"100px",
                    height:"100px"
                }}    
            />
            <Box>
                <Typography variant="h6" color="initial" sx={{fontSize:"1rem"}}>
                    {category}
                </Typography>
                <Typography variant="h6" color="initial">
                    {name}
                </Typography>
                  <Typography variant="h6" color="initial">
                      Rs.{price}
                  </Typography>
            </Box>
            <Stack
                direction="row"
                alignItems="center"
            >
                <Button
                    onClick={dec}
                >
                    -
                </Button>
                <Box>
                    {count}
                </Box>
                <Button
                    onClick={inc}
                >
                    +
                </Button>
            </Stack>
              <Typography variant="h6" color="initial">
                 Rs. {totalPrice}
              </Typography>
              <Button
                onClick={async ()=>{
                      await axios.delete(`${ process.env.REACT_APP_BE_API_URL }/cart/delete/${item._id}`);
                      dispatch(deleteItem(item._id));
                }}
              >
                X
              </Button>
        </Stack>
        <Divider sx={{mt:2}}/>
    </Grid>
  )
}

export default CartItem