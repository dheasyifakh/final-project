import React from 'react'
import { Card,CardContent,CardMedia,Typography,Button, CardActionArea, CardActions, Grid} from '@mui/material'

export default function CardMovie(props){
    const {movie} = props
    return(
    <Grid item xs={3}>
        <Card style={{minHeight: '503px'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={movie.Poster}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    )

}