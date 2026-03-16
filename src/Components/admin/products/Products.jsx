import React, { useState } from 'react'
import ProductCard from './ProductCard'
import styles from './products.module.css' 
import { Grid } from '@mui/material'


function Products() {
    const [products, setproducts] = useState([
        {
            id: 1,
            name: "Farm Fresh Eggs",
            category: "Eggs",
            price: 90,
            unit: "dozen",
            quantity: 50,
            isOrganic:true,
            image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f"
        },
        {
            id: 2,
            name: "Organic Cow Milk",
            category: "Dairy",
            price: 60,
            unit: "liter",
            quantity: 100,
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b"
        },
        {
            id: 3,
            name: "Tomatoes",
            category: "Vegetables",
            price: 30,
            unit: "kg",
            quantity: 80,
            isOrganic: true,
            image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea"
        },
        {
            id: 4,
            name: "Potatoes",
            category: "Vegetables",
            price: 25,
            unit: "kg",
            quantity: 120,
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655"
        },
        {
            id: 5,
            name: "Spinach",
            category: "Leafy Greens",
            price: 20,
            unit: "bundle",
            quantity: 60,
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb"
        },
        {
            id: 6,
            name: "Coriander Leaves",
            category: "Leafy Greens",
            price: 10,
            unit: "bundle",
            quantity: 70,
            isOrganic: true,
            image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
        },
        {
            id: 7,
            name: "Carrots",
            category: "Vegetables",
            price: 40,
            unit: "kg",
            quantity: 75,
            isOrganic: true,
            image: "https://images.unsplash.com/photo-1447175008436-054170c2e979"
        },
        {
            id: 8,
            name: "Cabbage",
            category: "Vegetables",
            price: 35,
            unit: "kg",
            quantity: 55,
            isOrganic: true,
            image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5"
        },
        {
            id: 9,
            name: "Organic Honey",
            category: "Natural Products",
            price: 250,
            unit: "500g",
            quantity: 40,
            image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
        },
        {
            id: 10,
            name: "Bananas",
            category: "Fruits",
            price: 50,
            unit: "dozen",
            quantity: 90,
            image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8"
        }
    ])

    let display=products.map((item,ind)=>{
        return(
            <Grid size={{xs:12,sm:6,md:4,lg:3}}>
                <ProductCard item={item} />
            </Grid>
        )
    })
  return (
    <div>
       <Grid container spacing={2}>
            {display}
       </Grid>
    </div>
  )
}

export default Products