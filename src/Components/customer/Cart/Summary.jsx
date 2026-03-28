import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

function Summary({ totalQuantity, grandTotal }) {
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
            <Typography variant="h6" color="initial">
                asdfghjkl
            </Typography>
        </Box>
        <Divider/>
        <Button>
            Place order
        </Button>
    </Stack>
  )
}

export default Summary