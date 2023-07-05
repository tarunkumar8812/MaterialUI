import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react'

const Cards = () => {

    const [showDialoge, setShowDialoge] = useState(false)
    return (
        <>
            <Card sx={{ maxWidth: "700px", marginTop: "100px", fontSize: "12px" }}>
                <CardHeader

                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Chorizo Paella"
                    subheader="September 14, 2016"
                >
                </CardHeader>
                <CardMedia
                    height={'140'}
                    component={'img'}
                    image='https://images.pexels.com/photos/7276640/pexels-photo-7276640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='test img'
                ></CardMedia>
                <CardContent>
                    <Typography variant='h5'>
                        Title
                    </Typography>
                    <Typography variant='body2' >
                        fsfdf af fafa lh r 98we knoi anfmas  jh,fasf,jbasd f .kjb  d,fj,nb,m dg.kb d aga
                        gk sdf
                    </Typography>
                </CardContent>
                <CardActions sx={{ flexWrap: "wrap" }} >
                    <Button startIcon={<DeleteIcon />}>Delete</Button>
                    <IconButton>
                        <FavoriteIcon fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <ShareIcon fontSize='small' />
                    </IconButton>
                    <IconButton onClick={() => setShowDialoge(true)} >
                        <DeleteIcon fontSize='small' />
                    </IconButton>
                </CardActions>
            </Card>

            <Dialog open={showDialoge}  fullWidth
                onClick={() => setShowDialoge(false)}
            >
                <DialogTitle>
                    Are Your Sure
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You want to delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDialoge(false)}
                    >Cancel</Button>
                    <Button onClick={() => setShowDialoge(false)}
                    >Delete</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default Cards