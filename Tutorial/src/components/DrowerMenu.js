import { Menu } from '@mui/icons-material'
import {  Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const DrowerMenu = () => {

    const [open, setOpen] = useState(false)
    const listItem = ['React', 'Nodejs', 'JavaScript']
    return (
        <>
            <IconButton aria-label="settings" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer anchor='top' open={open} onClose={() => setOpen(false)}>

                <List sx={{ width: '250px' }}>
                    {listItem.map((item) => {
                        return (<>
                            <ListItemButton onClick={() => setOpen(false)}>
                                <ListItemText>{item}</ListItemText>
                            </ListItemButton>
                        </>)
                    })}
                </List>
            </Drawer>
        </>
    )
}

export default DrowerMenu