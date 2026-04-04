import { Box, Button, Divider, Stack, Typography, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from '../../../redux/cartSlice';

function Summary({ totalQuantity, grandTotal }) {

    const [formData, setFormData] = useState({
        name: "",
        phNo: "",
        pincode: "",
        address: "",
    });

    const [disableButton, setdisableButton] = useState(false);

    let state=useSelector((state)=>state.cart);
    
    let dispatch=useDispatch()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handlePayment(){
        
        // console.log(formData);
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

                axios.post(`${process.env.REACT_APP_BE_API_URL}/orders/save`,
                    {
                        products:[
                            ...state.cart
                        ],
                        ...response,
                        ...formData,
                        price:grandTotal
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                dispatch(deleteAll());
                
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

    function button(){
        setdisableButton(false);

        state.cart.find((item,ind)=>{
            if(item.productId.quantity==0){
                setdisableButton(true);
                return true;
            }
        })

    }

    useEffect(() => {

        button();
        
    }, [state])
    

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
              <form>
                  <TextField
                      label="Name"
                      name="name"
                      fullWidth
                      margin="normal"
                      value={formData.name}
                      onChange={handleChange}
                      required
                  />

                  <TextField
                      label="Phone Number"
                      name="phNo"
                      fullWidth
                      margin="normal"
                      value={formData.phNo}
                      onChange={handleChange}
                      required
                  />

                  <TextField
                      label="Pincode"
                      name="pincode"
                      fullWidth
                      margin="normal"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                  />

                  <TextField
                      label="Address"
                      name="address"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      required
                  />

              </form>
        </Box>
        <Divider/>
        
       {
        ((totalQuantity<=0) || (disableButton==true))?
        <Button disabled>
            Place order
        </Button>
        :
        <Button onClick={handlePayment}>
            Place order
        </Button>
       }
    </Stack>
  )
}

export default Summary