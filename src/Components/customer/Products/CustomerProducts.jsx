import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Grid, Stack } from '@mui/material';

function CustomerProducts() {
  const [products, setproducts] = useState([])

  async function getProducts(){
    let res = await axios.get(`${process.env.REACT_APP_BE_API_URL}/product/getAll`);
    setproducts(res.data);
  }
  useEffect(()=>{
    getProducts();
  },[]);
  return (
    <Grid container spacing={2} mt={2}>
      {
        products.map((item,ind)=>{
          return(
            <ProductCard item={item} key={item._id}/>
          )
        })
      }
    </Grid>
  )
}

export default CustomerProducts