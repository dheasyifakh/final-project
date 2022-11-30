import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import  movieApi  from '../actions/movieApi'

export const fetchMovie = createAsyncThunk(
    "movies/fetchMovies",
    async (params) =>{
        const response = await movieApi.get(
            `?apikey=65525897&s=${params}`
        );
        return response.data
        // const response = await fetch(fetchURL)
        // return await response.json()
    }
)

const initialState = {
    isLoading: false,
    list:[]
}

const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(
            fetchMovie.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(
            fetchMovie.fulfilled,
            (state,action)=>{
                state.list = action.payload
                state.isLoading = false
            }
        )
    }
})

export default movieSlice.reducer