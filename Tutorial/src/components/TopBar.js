import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton } from '@mui/material'
import React, { useState } from 'react'
import DrowerMenu from '../components/DrowerMenu'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu } from '@mui/icons-material';
const TopBar = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <AppBar
            // sx={{ backgroundColor: "red" }}
            >
                <Toolbar>
                    <Typography variant='h5'>LOGO</Typography>
                    {/* <Button variant='contained' color='success' sx={{marginLeft:"auto"}}>Login</Button> */}
                    <Tabs
                        sx={{ marginLeft: "auto" }}
                        textColor='inherit'
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab label='Login'></Tab>
                        <Tab label='About'></Tab>
                        <Tab label='Career'></Tab>
                        <DrowerMenu></DrowerMenu>
                        
                    </Tabs>
                </Toolbar>
            </AppBar>


        </>
    )
}

export default TopBar