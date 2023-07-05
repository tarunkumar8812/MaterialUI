import { Button, Modal, Box, Typography } from '@mui/material'
import React, { useState } from 'react'

const Models = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button variant='contained' onClick={() => setOpen(true)}>Open Modal</Button>

            {/* modal is used to show poup forms */}
            <Modal open={open} onClose={() => setOpen(false)} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='h2'>
                        this is modal
                    </Typography>

                    <Button variant='contained' onClick={() => setOpen(false)}>close Modal</Button>
                </Box>

            </Modal>

        </>
    )
}

export default Models