import React, {useEffect, useState} from 'react';
import './main.css'

import {Container, Stack, Typography} from "@mui/material";
import {colors} from "../../constans/colors";
import Box from "@mui/material/Box";
import Category from "../category/category";
import {ApiService } from "../../api.service";
import Videos from "../videos/videos";


const Main = () => {

    const [selectedCategory, setselectCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const selectCategoryHandler = category => setselectCategory(category);




    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data.items)
            } catch (error) {
                console.log(error)
            }
        }
        getData(getData)


        // ApiService.fetching('search').then(data => setVideos(data));

    }, [selectedCategory])

    return (
        <Stack>
            <Category selectCategoryHandler={selectCategoryHandler} selectedCategory={selectedCategory}/>
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{color: colors.primary}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>

                </Container>

            </Box>
        </Stack>
    );
}

export default Main;



