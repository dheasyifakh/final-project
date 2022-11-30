import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../store/slices/movieSlice';

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
export default function Search(){
  const [param, setParam] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e) =>{
    e.preventDefault()
    if(param === ""){
      return alert("Please enter search!")
    }
    dispatch(fetchMovie(param))
    setParam("")
    console.log(param)
  }
  const changeInput = (e) =>{
    // setParam(term)
    // console.log(setParam(term))
    console.log(e.target.value)
    // console.log( setParam(e.target.value))
  }
    return(
      <form  onSubmit={submitHandler}>
        <SearchBar>
            <SearchIconWrapper>
                
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                value={param}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=> setParam(e.target.value)}
            />
            {/* <input
               type="text"
               value={param}
               onChange={()=> changeInput(e)}
               
               placeholder="Search Movies or Shows"
               
            /> */}
            <Button variant="contained"><SearchIcon /></Button>
        </SearchBar>
      </form>
    )
}