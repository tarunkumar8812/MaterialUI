import { ArrowCircleRight } from '@mui/icons-material'
import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const ListCompo = () => {
    const listItem = ['React', 'Nodejs', 'JavaScript']
    return (
        <>
            <List sx={{ width: '250px' }}>
                {listItem.map((item) => {
                    return (<>
                        <ListItem>
                            <ListItemText>{item}</ListItemText>
                            <Button startIcon={<ArrowCircleRight />} ></Button>
                        </ListItem>
                    </>)
                })}
            </List>
        </>
    )
}

export default ListCompo