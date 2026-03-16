import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Drawer, Grid, IconButton, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../Login'
import RegisterPage from '../customer/RegisterPage'
import Logo from '../Logo'
function LandingPage() {
    const [open, setOpen] = useState(false);
    let links=[
        { href: "#", content:"AboutUs"},
        { href: "#", content: "All Products" },
        { href: "#", content: "Contact Us" },
        { href: "/login", content: "Login" },
        { href: "/register", content: "Register" },
    ]
    let navLinks=links.map((item,ind)=>{
        return(
            <Link to={item.href} className='link'>{item.content}</Link>
        )
    })

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



  return (
    <div>
        {/* navBar */}
        <AppBar
            position='static'
        >
            <Toolbar>
                  <Logo 
                    sx={{
                        flexGrow:"1",
                    }}
                />
                <Box
                    sx={{
                        display:{xs:"none",md:"flex"},
                        gap:"20px",
                        
                    }} 
                >
                   {navLinks}
                </Box>
                <IconButton 
                    sx={{
                        display:{md:"none"}
                    }}
                    onClick={toggleDrawer(true)}
                >
                      <MenuIcon/>
                </IconButton>
            </Toolbar>
            {/* drawer */}
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap="10px"
                >
                    <Box 
                        component="img"
                        src="./logo.png"
                        sx={{
                            width:"70px",
                            height:"70px"
                        }}    
                    />
                    <Typography>
                        KisanMart
                    </Typography>
                    
                </Stack>
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"40px",
                        width:"300px",
                        alignItems:"center",
                        color:"black",
                        pt:4
                    }}
                >
                     {navLinks}
                </Box>
            </Drawer>
        </AppBar>
        {/* main content */}
        <Grid container spacing={2}>
            <Grid size={{xs:12,sm:6,md:4}}>
                  <Box
                      sx={{
                        //   width: "300px",
                          height: "300px",
                          border: "10px solid black"
                      }}
                  >
                      lkjhfd
                  </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                      sx={{
                        //   width: "300px",
                          height: "300px",
                          border: "10px solid black"
                      }}
                  >
                      lkjhfd
                  </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                      sx={{
                        //   width: "300px",
                          height: "300px",
                          border: "10px solid black"
                      }}
                  >
                      lkjhfd
                  </Box>
            </Grid>
       </Grid>
    </div>
  )
}

export default LandingPage;

