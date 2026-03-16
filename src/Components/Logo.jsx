import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Logo({sx}) {
  return (
      <Stack
          direction="row"
          alignItems="center"
          gap="10px"
          sx={{
            ...sx
          }}
      >
          <Box
              component="img"
              src="./logo.png"
              sx={{
                  width: "70px",
                  height: "70px"
              }}    
          />
          <Typography>
              KisanMart
          </Typography>

      </Stack>
  )
}

export default Logo