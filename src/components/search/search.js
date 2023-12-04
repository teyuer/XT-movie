import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {ApiService} from "../../api.service";
import {Box} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {colors} from "../../constans/colors";
import Videos from "../videos/videos";

const Search = () => {
    const [videos,setVideos]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        const getData= async ()=>{
            try{
                const data= await ApiService.fetching(`search?part=snippet&q=${id} `)
                setVideos(data.items);
                console.log(data.items)
            }catch (error){
                console.log(error)
            }
        }
        getData()
    }, [id])

    console.log(id)
    return (
        <Box p={2} mt={'50px'} sx={{height: '120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                    search results for <span style={{color: colors.secondary}}> {id}</span> videos
                </Typography>

                <Videos videos={videos}/>

            </Container>
        </Box>
    );
}

export default Search;