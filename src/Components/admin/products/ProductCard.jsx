import React from 'react'
import styles from './products.module.css' 
import { Chip } from '@mui/material'


function ProductCard({item}) {
    let { image, name, price, isOrganic, quantity }=item;
    console.log(item)
  return (
    <div className={styles.card}>
          <img src={image} alt=""/>
        <h1>
            {name}
        </h1>
        <p>
            {price}
        </p>
        <button className={styles.btn}>ADD TO CART</button>
        {
            isOrganic ? 
              <Chip label="Organic" sx={{
                  backgroundColor: "green",
                  position: "absolute",
                  top: "10px",
                  left: "10px"
              }} />
              :
              ""
        }
        <Chip label={quantity} color="primary"
            sx={{
                position:"absolute",
                top:"10px",
                right:"10px"
            }}
        />
    </div>
  )
}

export default ProductCard