import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import React, { useState } from 'react'

function AddProduct({ getNewProduct }) {

    const [name, setname] = useState("")
    const [price, setprice] = useState(0)
    const [category, setcategory] = useState("")
    const [unit, setunit] = useState("")
    const [quantity, setquantity] = useState()
    const [isOrganic, setisOrganic] = useState(false)

    function add(){
        let product={
            name,
            price,
            category,
            unit,
            quantity,
            isOrganic
        }
        // console.log(product);
        getNewProduct(product)
    }

    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:"column",
                border:"2px solid black",
                padding:"30px",
                gap:"10px"
            }}
        >
            <TextField  label="name" onChange={(event)=>setname(event.target.value)}/>
            <TextField label="category" onChange={(event) => setcategory(event.target.value)} />
            <TextField label="price" onChange={(event) => setprice(event.target.value)} />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Unit"
                    onChange={(event)=>setunit(event.target.value)}
                >
                    <MenuItem value={"kg"}>Kg</MenuItem>
                    <MenuItem value={"dozen"}>dozen</MenuItem>
                    <MenuItem value={"liter"}>liter</MenuItem>
                </Select>
            </FormControl>
            <TextField label="quantity" onChange={(event) => setquantity(event.target.value)} />
            <FormControlLabel
                control={
                    <Switch
                        onChange={(event) => setisOrganic(event.target.checked)}
                        name='isOrganic'

                    />
                }
                label="Organic"
            />
            
            <Button
                onClick={add}
            >
                Add Product
            </Button>







        </Box>
    )
}

export default AddProduct