import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'

function Summary({ totalQuantity, grandTotal }) {

    async function handlePayment(){
        let res = await axios.post(
            `${process.env.REACT_APP_BE_API_URL}/payment/create-order`,
            {
                amount: grandTotal
            }
        );
        let data=res.data;
        const options = {

            key: process.env.REACT_APP_KEY,

            amount: data.amount,

            currency: "INR",

            order_id: data.id,

            handler: function (response) {

                alert("Payment Successful");
                console.log(response);
                // call success api 
            },

            prefill: {
                name: "Sharief",
                email: "test@gmail.com",
                contact: "9999999999"
            },

            theme: {
                color: "#3399cc"
            }
        };
        // integrate razorpay script link in index.html

        const razor = new window.Razorpay(options);

        razor.open();
    }
  return (
    <Stack>
        <Typography variant="h4" color="initial">
            Summary
        </Typography>
        <Divider/>
        <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" color="initial">Items-{totalQuantity}</Typography>
              <Typography variant="h6" color="initial">{grandTotal}</Typography>

        </Stack>
        <Divider/>
        <Box>
            <Typography variant="h6" color="initial">Address</Typography>
            <Typography variant="h6" color="initial">
                asdfghjkl
            </Typography>
        </Box>
        <Divider/>
        <Button onClick={handlePayment}>
            Place order
        </Button>
    </Stack>
  )
}

export default Summary