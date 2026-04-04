import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../../redux/cartSlice';

function ProductCard({item}) {
    let { image, name, price, category, unit, quantity, isOrganic ,_id}=item;
    let dispatch=useDispatch();
  return (
    <Grid
        size={{xs:12,md:6,lg:4}} 
        sx={{
            width:"100%",
            // height:"300px",
            border:"10px solid black",
            position:"relative",
            backgroundColor:quantity==0?"gray":""
        }}
    >
        <Box 
            component="img"
            src={image} 
            sx={{
                width:"100%",
                height:"200px"
            }}   
        />
        <Typography>
            {name}
        </Typography>
        <Typography>
            {price}
        </Typography>
        {
            quantity==0?
            <Typography variant="h6" color="initial">
                Outof stock
            </Typography>
            :
            <Button
                onClick={async () => {
                    let res = await axios.post(
                        `${process.env.REACT_APP_BE_API_URL}/cart/add`,
                        { productId: _id },
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }
                        }
                    )
                    alert("added");
                    let obj = {
                        ...res.data,
                        productId: item
                    }
                    dispatch(add([obj]));

                }}
            >
                Add To Cart
            </Button>
        }
          <Chip 
            label={`q: ${quantity}`} 
            color="primary" 
            sx={{
                position:"absolute",
                top:"0px",
                left:"0px"
            }}
          />
    </Grid>
  )
}

export default ProductCard