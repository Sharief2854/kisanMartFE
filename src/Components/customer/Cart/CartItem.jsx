import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function CartItem({ item, deleteItem, getTotalPrice }) {
    let { id, name, category, price, unit, quantity,image}=item;
    const [totalPrice, settotalPrice] = useState(price);

    const [count, setcount] = useState(1);

    function dec(){
        if(count<=1){
            return;
        }
        setcount((prev)=>{
            prev--;
            settotalPrice(prev*price);
            getTotalPrice(prev * price,id)
            return prev;
        })
    }
    function inc(){
        if (count >= quantity){
            window.alert(`there is only ${quantity} ${unit}'s`);
            return;
        }
        setcount((prev) => {
            prev++;
            settotalPrice(prev * price);
            getTotalPrice(prev * price,id)
            return prev;
        })


    }
    useEffect(()=>{
        console.log(totalPrice);
    },[totalPrice]);
   
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
                onClick={()=>{
                      deleteItem(id);
                      console.log(totalPrice);
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