import { Container, Typography } from '@mui/material'
import React from 'react'

const Containers = () => {
    return (
        <>
            {/* it acts like a div with horizontialy centered */}
            <Container sx={{ bgcolor: "yellow" }} maxWidth='md'>
                <Typography variant='h3'> this is Container</Typography>
                <Typography variant='h4'> this is Container</Typography>
                <Typography variant='h5'> this is Container</Typography>
                <Typography variant='h6'> this is Container</Typography>
                <Typography variant='body1'> this is Container</Typography>
                <Typography variant='body2'> this is Container</Typography>
            </Container>
        </>
    )
}

export default Containers