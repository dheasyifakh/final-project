import { Container,Card,CardContent,CardMedia,Typography,Button, CardActionArea, CardActions, Grid} from '@mui/material'
import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchMovie } from '../../store/slices/movieSlice'
import CardMovie from '../CardMovie/CardMovie'

export default function Movie(){
    const allMovies = useSelector((state)=> state.movie.list)
    const dispatch = useDispatch()
    let renderMovies = ""
    useEffect(
        ()=>{
            dispatch(fetchMovie('man'))
        },[]
    )
    renderMovies = allMovies.Response === "True" ?(
        allMovies.Search.map((movie, i)=>{
            return(
                <CardMovie key={i} movie={movie}/>
            )
        })
    ) : (
        <div className="movies-error">
            <h3>{allMovies.Error}</h3>
        </div>
    )
    return(
        
        <Container >
          <br></br>
            <h1 >Show your Favorit Movie</h1>
            <Grid container spacing={2} sx={{paddingBottom: 3, paddingTop: 3}}>   
                {renderMovies}      
            </Grid>
        </Container>
    )
}