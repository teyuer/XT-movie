import React, {useState} from 'react';
import {IconButton, Paper} from "@mui/material";
import {Search} from "@mui/icons-material";
import {colors} from "../../constans/colors";
import {useNavigate} from "react-router-dom"


const SearchBar = () => {
    const navigate=useNavigate()
    const [value, setValue]=useState('');
    const submitHandler = e => {
        e.preventDefault()
        if (value){
            navigate(`/search/${value}`)
            setValue('')
        }

    }
    return (
        <Paper
            onSubmit={submitHandler}
            component={'form'}
            sx={{
                border: ` 2px solid ${colors.primary}`,
                pl: 2,
                boxShadow: 'none',
                mr: 5,
            }}
        >
            <input type='text'

                   placeholder='Search...'
                   className='search-bar'
                   value={value}
                   onChange={e => setValue(e.target.value) }
            />
            <IconButton type='submit' sx={{p: '10px', color: colors.primary}}>
                <Search/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;