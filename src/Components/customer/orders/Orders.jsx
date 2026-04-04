import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import axios from 'axios';
import Typography from '@mui/material/Typography'
import { Box, Divider, Grid } from '@mui/material';

function Orders() {

    const [orders, setorders] = useState([])
    async function getOrders(){
        let res=await axios.get(`${process.env.REACT_APP_BE_API_URL}/orders`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        setorders(res.data);
        // console.log(res.data);
    }

    let products=orders.map((order)=>{
        let arr=order.products.map((item,ind)=>{
            console.log(item);

            let totalPrice = item.productId.price * item.count;
            return(
                <OrderCard 
                    count={item.count} 
                    category={item.productId.category} 
                    image={item.productId.image}
                    name={item.productId.name}
                    price={item.productId.price}
                    units={item.productId.unit}
                    totalPrice={totalPrice}
                    key={item._id}
                />
            )
        })
        const dateObj = new Date(order.date);

        // Options for Indian Date
        const dateOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'Asia/Kolkata'
        };

        // Options for Indian Time
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
        };

        const orderDate = dateObj.toLocaleDateString('en-IN', dateOptions);
        const orderTime = dateObj.toLocaleTimeString('en-IN', timeOptions);
 
        return (
            <Grid   
                size={{xs:12}} 
                sx={{
                    border:"1px solid black",
                    borderRadius:"10px",
                    p:2
                }}
                key={order._id}
            >
                <Typography variant="h6" color="initial"
                    sx={{
                        border:"1px solid black",
                        display:"inline-block",
                        p:1,
                        borderRadius:2,
                        backgroundColor:"gray"
                    }}
                >
                    {orderDate} <br /> 
                    {orderTime}
                </Typography>
                <Box>
                    {arr}
                </Box>
                <Divider/>
            </Grid>
        );
    });

    useEffect(()=>{
        getOrders();
    },[]);
  return (
    <Grid
        container
        spacing={2}
        mt={2}
        mx={2}
    >
        {
            products
        }
    </Grid>
  )
}

export default Orders