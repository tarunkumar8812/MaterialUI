import { Share } from '@mui/icons-material'
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button, IconButton, Typography } from '@mui/material'
import React from 'react'

const Accord = () => {
    return (
        <>
            <Accordion sx={{ width: "300px" }}>
                <AccordionSummary expandIcon={'v'} sx={{ color: "white", bgcolor: "green" }} >
                    <Typography>React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>react is very powerful tool</Typography>
                </AccordionDetails>
                <AccordionActions>
                    <IconButton >
                        <Share></Share>
                    </IconButton>
                </AccordionActions>
            </Accordion>
            <Accordion>
                <AccordionSummary>NodeJS</AccordionSummary>
                <AccordionDetails>NodeJS is very powerful tool</AccordionDetails>
                <AccordionActions>
                    <Button>Share</Button>
                </AccordionActions>
            </Accordion>
        </>
    )
}

export default Accord