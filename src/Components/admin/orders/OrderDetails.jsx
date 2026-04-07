import { Box, Divider, Grid, Stack, Switch, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function OrderDetails({order,arr}) {

    const [isAccepted, setisAccepted] = useState(order.isAccepted);
    const [isShipped, setisShipped] = useState(order.isShipped);
    const [isDelivered, setisDelivered] = useState(order.isDelivered);
    const [isCanceled, setisCanceled] = useState(order.isCanceled);


    function handleOrder(){
        
    }


    // useEffect(()=>{

    // });
  return (
      <Grid
          size={{ xs: 12 }}
          sx={{
              border: "1px solid black",
              borderRadius: "10px",
              p: 2
          }}
          key={order._id}
      >
          <Stack
              direction='row'
              justifyContent="space-between"
          >
              {
                isCanceled==true?"Canceled":
                      <Box>
                          <Stack
                              direction="row"
                          >
                              <Switch
                                  checked={isAccepted}
                                  onChange={async (event) => {
                                      try {
                                          let res = await axios.put(`${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                                              {
                                                  isAccepted: true
                                              },
                                              {
                                                  headers: {
                                                      Authorization: `Bearer ${localStorage.getItem("token")}`
                                                  }
                                              }
                                          );
                                          setisAccepted(true);
                                      }
                                      catch (err) {
                                          alert("something wrong try again")
                                      }
                                  }}

                              />
                              <Typography variant="h6" color="initial">
                                  Accept
                              </Typography>

                              {
                                  isAccepted == true ? "" :
                                      <Stack
                                          direction={"row"}
                                      >
                                          <Switch
                                              checked={isCanceled}
                                              onChange={async () => {
                                                  try {
                                                      let res = await axios.put(`${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                                                          {
                                                              isCanceled: true
                                                          },
                                                          {
                                                              headers: {
                                                                  Authorization: `Bearer ${localStorage.getItem("token")}`
                                                              }
                                                          }
                                                      );
                                                      setisCanceled(true);
                                                  }
                                                  catch (err) {
                                                      alert("something wrong try again")
                                                  }
                                              }}

                                          />
                                          <Typography variant="h6" color="initial">
                                              Cancel
                                          </Typography>
                                      </Stack>
                              }
                          </Stack>

                          <Stack
                              direction="row"
                          >
                              <Switch
                                  checked={isShipped}
                                  onChange={async (event) => {
                                      try {
                                          let res = await axios.put(`${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                                              {
                                                  isShipped: true
                                              },
                                              {
                                                  headers: {
                                                      Authorization: `Bearer ${localStorage.getItem("token")}`
                                                  }
                                              }
                                          );
                                          setisShipped(true);
                                      }
                                      catch (err) {
                                          alert("something wrong try again")
                                      }
                                  }}

                              />
                              <Typography variant="h6" color="initial">
                                  Shipped
                              </Typography>
                          </Stack>

                          <Stack
                              direction="row"
                          >
                              <Switch
                                  checked={isDelivered}
                                  onChange={async (event) => {
                                      try {
                                          let res = await axios.put(`${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                                              {
                                                  isDelivered: true
                                              },
                                              {
                                                  headers: {
                                                      Authorization: `Bearer ${localStorage.getItem("token")}`
                                                  }
                                              }
                                          );
                                          setisDelivered(true);
                                      }
                                      catch (err) {
                                          alert("something wrong try again")
                                      }
                                  }}

                              />
                              <Typography variant="h6" color="initial">
                                  Delivered
                              </Typography>
                          </Stack>
                      </Box>
              }
              <Box
                  sx={{
                      border: "1px solid black",
                      backgroundColor: "gray",
                      p: 2,
                      borderRadius: 2,
                  }}
              >
                  <Typography variant="h6" color="initial">
                      Total Price = Rs. {order.price} <br />
                      <i>
                          {order.name}, <br />
                          {order.phoneNo}, <br />
                          {order.pincode}, <br />
                          {order.address}
                      </i>
                  </Typography>
              </Box>
              <Typography variant="h6" color="initial"
                  sx={{
                      border: "1px solid black",
                      display: "inline-block",
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: "gray"
                  }}
              >
                  {order.orderDate} <br />
                  {order.orderTime}
              </Typography>
          </Stack>
          <Box>
              {arr}
          </Box>
          <Divider />
      </Grid>
  )
}

export default OrderDetails