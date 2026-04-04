import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function OrderCard({image,category,name,price,count,totalPrice,units}) {
  return (
    <Box>
          <Grid
              size={{ xs: 12 }}
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
                          width: "100px",
                          height: "100px"
                      }}
                  />
                  <Box>
                      <Typography variant="h6" color="initial" sx={{ fontSize: "1rem" }}>
                          {category}
                      </Typography>
                      <Typography variant="h6" color="initial">
                          {name}
                      </Typography>
                      <Typography variant="h6" color="initial">
                          Rs.{price}
                      </Typography>
                      <Typography variant="h6" color="initial">
                          count: {count} {units}
                      </Typography>

                  </Box>
                  
                  <Typography variant="h6" color="initial">
                      Total <br /> 
                      
                      Rs.{totalPrice}
                  </Typography>
              </Stack>
              <Divider sx={{ mt: 2 }} />
          </Grid>
    </Box>
  )
}

export default OrderCard